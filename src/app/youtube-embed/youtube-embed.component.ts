import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-youtube-embed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube-embed.component.html',
  styleUrl: './youtube-embed.component.scss'
})
export class YoutubeEmbedComponent implements OnInit{

  videoUrl: string = '';
  sanitizedUrl: SafeResourceUrl | null = null;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Get the video ID from the route parameter
    this.route.paramMap.subscribe(params => {
      const videoId = params.get('videoId');
      if (videoId) {
        this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
      }
    });
  }
}
