import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdf-file',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './pdf-file.component.html',
  styleUrl: './pdf-file.component.scss'
})
export class PdfFileComponent {

  pdfSrc = "assets/pdfs/Projet_ de_Statuts3.pdf";
}
