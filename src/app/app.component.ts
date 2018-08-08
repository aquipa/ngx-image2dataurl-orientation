import { Component } from '@angular/core';
import { ImageResult, Options } from "ngx-image2dataurl";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  src: string = null;
  options: Options = {
    resize: {
      maxHeight: 128,
      maxWidth: 128,
    },
    allowedExtensions: ['JPG', 'PnG']
  };

  selected(imageResult: ImageResult) {
    if (imageResult.error) alert(imageResult.error);
    this.src = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
  }
}
