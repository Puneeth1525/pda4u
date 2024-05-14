import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import {
  MatTree,
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNestedDataSource,
} from '@angular/material/tree';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

export class InputNode {
  children: InputNode[];
  // children: BehaviorSubject<InputNode[]>;
  constructor(
    public item: string,
    children?: InputNode[],
    public isLeafNode?: boolean,
    public firstParentNodeText?: string,
    public parentNodeText?: string,
    public parent?: InputNode
  ) {
    // this.children = new BehaviorSubject(children === undefined ? [] : children);
    this.children = children === undefined ? [] : children;
  }
}

const TREE_DATA = [
  new InputNode(
    'Input File',
    [
      new InputNode('File Properties', [], false, 'Input File'),
      new InputNode(
        'Header',

        [
          new InputNode(`Field 1`, [], true, 'Input File', 'Header'),
          new InputNode(`Button`, [], false, 'Input File', 'Header'),
        ],
        false,
        'Input File'
      ),
      new InputNode(
        'Body',

        [
          new InputNode(`Field 1`, [], true, 'Input File', 'Body'),
          new InputNode(`Button`, [], false, 'Input File', 'Body'),
        ],
        false,
        'Input File'
      ),
      new InputNode(
        'Footer',

        [
          new InputNode(`Field 1`, [], true, 'Input File', 'Footer'),
          new InputNode(`Button`, [], false, 'Input File', 'Footer'),
        ],
        false,
        'Input File'
      ),
    ],
    false
  ),
  new InputNode(
    'Response File',
    [
      new InputNode('File Properties', [], false, 'Response File'),
      new InputNode(
        'Header',

        [
          new InputNode(`Field 1`, [], true, 'Response File', 'Header'),
          new InputNode(`Button`, [], false, 'Response File', 'Header'),
        ],
        false,
        'Response File'
      ),
      new InputNode(
        'Body',

        [
          new InputNode(`Field 1`, [], true, 'Response File', 'Body'),
          new InputNode(`Button`, [], false, 'Response File', 'Body'),
        ],
        false,
        'Response File'
      ),
      new InputNode(
        'Footer',

        [
          new InputNode(`Field 1`, [], true, 'Response File', 'Footer'),
          new InputNode(`Button`, [], false, 'Response File', 'Footer'),
        ],
        false,
        'Response File'
      ),
    ],
    false
  ),
];

interface ActiveFieldInterface {
  activeFileName: String; //Input/Response
  activeSectionName?: String; //Header/Body/Footer/File
  activeFieldName?: String; //Field Field 2 ...
}

export class DynamicFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = false
  ) {}
}

@Component({
  selector: 'app-template-properties-tree-section',
  templateUrl: './template-properties-tree-section.component.html',
  styleUrls: ['./template-properties-tree-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TemplatePropertiesTreeSectionComponent {
  @Input() onMenuClick: Function;
  @ViewChild('treeSelector') tree: MatTree<any>;

  showFiller = false;
  treeHide: boolean = true;
  recursive: boolean = false;
  levels = new Map<InputNode, number>();
  treeControl: NestedTreeControl<InputNode>;
  activeFieldDetails: ActiveFieldInterface;

  dataChange = new BehaviorSubject<InputNode[]>([]);

  dataSource: MatTreeNestedDataSource<InputNode>;
  activeRoutes: string[] = [];
  constructor(private router: Router, private _snackBar: MatSnackBar) {
    this.treeControl = new NestedTreeControl<InputNode>(this.getChildren);
    this.dataSource = new MatTreeNestedDataSource();
    this.dataSource.data = TREE_DATA;
    this.activeFieldDetails = { activeFileName: 'Template Properties' };
  }

  hasNoContent = (_: number, _nodeData: InputNode) => _nodeData.item === '';

  ngOnInit() {
    this.activeRoutes = [];
  }

  getChildren = (node: InputNode): InputNode[] => node.children;

  hasChildren = (index: number, node: InputNode) => {
    return node.children.values.length > 0;
  };
  isLastChildren = (index: number, node: InputNode) => {
    return node.children.values.length - 1 == index;
  };

  formatPath(path: string) {
    let result = path;

    if (result.indexOf('(') > -1) {
      result = result.split('(')[0];
    }
    result = result.replace(' ', '');
    return result.toLowerCase();
  }

  onNodeClick(node: any) {
    let selectNode = node.item;
    let selectedParentNode = this.formatPath(node.parentNodeText || node.item);
    if (selectNode == 'Response File') {
      this.activeFieldDetails = {
        activeFileName: 'Response File',
        activeSectionName: 'File Properties',
      };
    }
    if (selectNode == 'Input File') {
      this.activeFieldDetails = {
        activeFileName: 'Input File',
        activeSectionName: 'File Properties',
      };
    }

    if (selectNode == 'File Properties') {
      this.activeFieldDetails = {
        activeFileName: node.firstParentNodeText,
        activeSectionName: 'File Properties',
      };
    }

    if (
      selectedParentNode == 'header' ||
      selectedParentNode == 'body' ||
      selectedParentNode == 'footer'
    ) {
      this.activeFieldDetails.activeSectionName = `${selectedParentNode
        .charAt(0)
        .toUpperCase()}${selectedParentNode.slice(1)}`;
      if (node.item !== 'Button') {
        this.activeFieldDetails.activeFieldName = 'Field 1';
      }
    }
    if (selectNode.includes('Field')) {
      this.activeFieldDetails.activeFieldName = selectNode;
    }
    if (node.item == 'Button') {
      this.addRemoveDuplicatedField(node);
    }
    this.onClickOnMenuSelection();
  }

  removeField(node: any) {
    let path = node;
    this.addRemoveDuplicatedField(node, false);
  }

  duplicate(node: any) {
    let path = node;
    // Duplicate logic goes here.
    this.addRemoveDuplicatedField(node, false, true);
  }

  addRemoveDuplicatedField(node: any, isAdding = true, duplicated = false) {
    this.treeHide = false;
    for (let index = 0; index < this.dataSource.data.length; index++) {
      const element = this.dataSource.data[index];
      if (element && element.item === node.firstParentNodeText) {
        for (let j = 0; j < element.children.length; j++) {
          const childElement = element.children[j];
          if (childElement.item === node.parentNodeText) {
            let btnLength =
              this.dataSource?.data[index]?.children[j].children.length;
            // element add condition
            if (isAdding) {
              let buttonElm =
                this.dataSource?.data[index]?.children[j].children?.pop();
              this.dataSource?.data[index]?.children[j].children?.push(
                new InputNode(
                  `Field ${btnLength + 1}`,
                  [],
                  true,
                  element.item,
                  childElement.item
                )
              );
              this.dataSource?.data[index]?.children[j].children?.push(
                buttonElm
              );
              // element remove condition
            } else if (!isAdding && btnLength > 2 && !duplicated) {
              //find selected field index
              let indexRemoved = this.dataSource?.data[index]?.children[
                j
              ].children.findIndex(
                (childField) => childField.item === node.item
              );
              this.dataSource?.data[index]?.children[j].children.splice(
                indexRemoved,
                1
              );
              // element duplicate condition
            } else if (duplicated) {
              let buttonElm =
                this.dataSource?.data[index]?.children[j].children?.pop();
              let indexRemoved = this.dataSource?.data[index]?.children[
                j
              ].children.filter((childField) => childField.item === node.item);
              this.dataSource?.data[index]?.children[j].children?.push(
                new InputNode(
                  `Field ${btnLength + 1}`,
                  [],
                  true,
                  element.item,
                  childElement.item
                )
              );
              this.dataSource?.data[index]?.children[j].children?.push(
                buttonElm
              );
            }
            let data = this.dataSource.data;
            this.dataSource.data = null;
            this.dataSource.data = data;
          }
        }
      }
    }
  }

  activeTemplateProperties() {
    this.activeFieldDetails = {
      activeFileName: 'Template Properties',
    };
    this.onClickOnMenuSelection();
  }

  onClickOnMenuSelection() {
    let selectProperties = `${this.activeFieldDetails.activeFileName}${
      this.activeFieldDetails?.activeSectionName
        ? '-' + this.activeFieldDetails?.activeSectionName
        : ''
    }`;
    this.onMenuClick(selectProperties.toLowerCase().replaceAll(' ', '-'));
  }

  drop(event: CdkDragDrop<string[]>) {
    let selectedNode = event.item.data;
    let moveToPosition = event.currentIndex - event.previousIndex;
    // ignore drops outside of the tree
    if (!event.isPointerOverContainer) return;
    this.moveElementFromOnePointToAnother(selectedNode, moveToPosition);
  }

  // Move field element from one position to another position.
  moveElementFromOnePointToAnother(selectedNode, moveToPosition) {
    for (let index = 0; index < this.dataSource.data.length; index++) {
      const element = this.dataSource.data[index];
      if (element && element.item === selectedNode.firstParentNodeText) {
        for (let j = 0; j < element.children.length; j++) {
          const childElement = element.children[j];
          if (childElement.item === selectedNode.parentNodeText) {
            let fieldChildren =
              this.dataSource?.data[index]?.children[j].children;
            for (let k = 0; k < fieldChildren.length; k++) {
              if (fieldChildren[k].item === selectedNode.item) {
                let isButton;
                let moveToFinalPosition;
                if (moveToPosition < 0) {
                  moveToFinalPosition = k - -moveToPosition;
                  isButton =
                    fieldChildren[moveToFinalPosition]?.item === 'Button';
                } else {
                  moveToFinalPosition = k + moveToPosition;
                  isButton =
                    fieldChildren[moveToFinalPosition]?.item === 'Button';
                }
                let currentElement = fieldChildren[k];
                let nextElement =
                  this.dataSource.data[index].children[j].children[
                    moveToFinalPosition
                  ];
                if (!isButton && currentElement && nextElement) {
                  this.dataSource.data[index].children[j].children[k] =
                    this.dataSource.data[index].children[j].children[
                      moveToFinalPosition
                    ];
                  this.dataSource.data[index].children[j].children[
                    moveToFinalPosition
                  ] = currentElement;
                  let data = this.dataSource?.data;
                  this.dataSource.data = null;
                  this.dataSource.data = data;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }

  preventMoveIconClick(e: any, node: any) {
    if (node?.isLeafNode) {
      e.stopPropagation();
      return true;
    } else {
      return true;
    }
  }
}
