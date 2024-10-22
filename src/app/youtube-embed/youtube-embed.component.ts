import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-embed',
  standalone: true,
  imports: [],
  templateUrl: './youtube-embed.component.html',
  styleUrl: './youtube-embed.component.scss'
})
export class YoutubeEmbedComponent implements OnInit{

  videoUrl: string = 'https://www.youtube.com/embed/WIEA_vcQkE8';
  sanitizedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
  ngOnInit(): void {}

}
