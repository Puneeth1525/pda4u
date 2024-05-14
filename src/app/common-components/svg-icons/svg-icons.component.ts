import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icons',
  templateUrl: './svg-icons.component.html',
  styleUrls: ['./svg-icons.component.scss'],
})
export class SvgIconsComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `dashboard`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Dashboard.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `integrations`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/integrations.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `connection`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/connection.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `partners`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Partners.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `run-history`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/run-history.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `templates`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Templates.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `align-vertical-center`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/align-vertical-center.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `down-arrow`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/down-aerrow.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `check-circle-broken`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/check-circle-broken.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `check-circle`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Icon.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `back`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/back.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `save`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/save.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `test`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/test.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `lock`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/lock.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `compress`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/compress.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `downarrow-default`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/down-arrow-default.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `download`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/download.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `share`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/share.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `trash-red`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/trash-red.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `clock-circle`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/clock.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `file`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/file.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `expand-all`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/expand-all.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `Vector`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Vector.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `close`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/close.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `caution`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/caution.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `doc-search`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/doc-search.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `info`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/info.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `down-arrow`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/down-arrow.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `check-arrow`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/check.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `slider-arrow`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/slider-arrow.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `copy`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/copy.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `edit`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/edit.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `edit-white`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/edit-white.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `trash`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/trash.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `clock`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/clock.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `listactive`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/list-active.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `grid`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/grid.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `dash-arrow-left`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/dash-arrow-left.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `dash-high`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/dash-high.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `dash-low`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/dash-low.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `profile-icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/profile-icon.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `logout-icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/logout-icon.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `align-vertical-center`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/align-vertical-center-01.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `chevron-left-double`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/chevron-left-double.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `graph`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/graph.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `upload-icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/upload.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `arrows-right`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/arrows-right.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `arrows-left`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/arrows-left.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `clock-refresh`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/clock-refresh.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `bell`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/bell.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `dependency`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/dependency.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `alert-circle`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/alert-circle.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `file-download`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/file-download.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `info-dark`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/info-dark.svg'
      )
    );
  }
}
