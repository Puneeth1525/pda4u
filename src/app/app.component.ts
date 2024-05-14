import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  trustedLogo: SafeHtml = '';
  isSidebarOpen = true;
  constructor(
    private domSanitizer: DomSanitizer,
    private http: HttpClient
  ) {
  }
  title = 'rcx';
  ngOnInit() {
    this.fetchLogo();
  }
  fetchLogo(): void {
    this.http
      .get('assets/logo.svg', { responseType: 'text' })
      .subscribe((svgContent: string) => {
        this.trustedLogo =
          this.domSanitizer.bypassSecurityTrustHtml(svgContent);
      });
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
