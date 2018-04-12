import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { VisionDataService } from '../services/vision-data.service';
import { CognitiveApiService } from '../services/cognitive-api.service';
import { IImageFeatures } from '../models/image-features.model';
import { VisionApiComponent } from '../vision-api.component'

@Component({
    selector: 'computer-vision',
    templateUrl: './computer-vision.component.html',
    styleUrls: ['./computer-vision.component.css']
})
export class ComputerVisionComponent extends VisionApiComponent implements OnInit {
    errorMessage = '';
    imageFeatures: IImageFeatures;
    showJSON = false;
    
    apiTitle = 'Creative Asset Analyzer Algorithm';
    apiBackgroundImage = '/assets/COSMOS-DeeperPersonalization-NoLoop';
    apiDescription = 'Every photo tells a story, and machine-learning can decipher that story, extract its information, process, filter, and categorize it for you.';
    apiReferenceUrl = 'https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739';

    showCodeButtons=true;
    showLargeCodeWindow=false;


    constructor(protected sanitizer: DomSanitizer, private titleService: Title, private visionDataService: VisionDataService, private cognitiveApiService: CognitiveApiService) {
        super(sanitizer);
        this.titleService.setTitle(this.apiTitle);
    };

    ngOnInit() {
        this.isLoading = true;
        this.imageList = this.cognitiveApiService.objectImageUrls;
        this.internetImageUrl = this.cognitiveApiService.objectImageUrls[0];
        this.onInternetUrlSelected();
    }

    bestDescription() {
        if (!this.imageFeatures || !this.imageFeatures.description) {
            return null;
        }
        return this.imageFeatures.description.captions.reduce((prev, current) => {
            return (prev.confidence > current.confidence) ? prev : current;
        });
    }

    highConfidenceTags() {
        return this.imageFeatures.tags.filter(tag => {
            return tag.confidence >= 0.5;
        }).map(tag => {
            return tag.name;
        }).join(', ');
    }

    lowConfidenceTags() {
        return this.imageFeatures.tags.filter(tag => {
            return tag.confidence < 0.5;
        }).map(tag => {
            return tag.name;
        }).join(', ');
    }

    public toggleJSON(b: boolean) {
        this.showJSON = b;
    }

    onResize() {
        this.clearFaces();
        this.processFaces();
    }

    refreshDetection() {
        this.clearFaces();
        this.errorMessage = "";

        if (!this.selectedImageUrl) {
            this.errorMessage = 'Please provide a valid URL';
        } else {
            this.isLoading = true;
            this.visionDataService.analyze(this.selectedImageUrl)
                .then(imageFeatures => {
                    this.imageFeatures = imageFeatures;
                    this.isLoading = false;
                    this.processFaces();
                })
                .catch((error) => {
                    this.errorMessage = error;
                    this.isLoading = false;
                });
        }
    }

    processFile(result: any) {
        this.isLoading = true;
        this.visionDataService.analyze(result)
            .then(imageFeatures => {
                this.imageFeatures = imageFeatures;
                this.isLoading = false;
                this.processFaces();
            })
            .catch((error) => {
                this.errorMessage = error;
                this.isLoading = false;
            });
    }

    // private fireFaceDetectingEvent(): void {
    //   this.faceDetecting.emit({ cameraName: this.cameraName });
    // }

    // private fireFaceDetectedEvent(): void {
    //   this.faceDetected.emit({ url: this.imageUrl, bytes: this.bytes, faceIds: this.faceIds, cameraName: this.cameraName });
    // }

    private processFaces() {
        if (!this.selectedImage) {
            return;
        }

        if (this.imageFeatures.faces) {
            this.imageFeatures.faces.forEach(face => {
                this.faceRectangles.push(this.processFaceRectangle(face.faceRectangle));
            });
            // var hoverEvent = (containerIndex == 0 ? 'onmouseover="showFaceInfo(' + i + ',this,' + containerIndex
            //     + ')" onmouseout="hideImginfo(this)"' : '');
            // $(".floatingCirclesG", imageContainer.container).before('<div ' + hoverEvent + ' bw="5" faceid="' + f.faceId
            //     + '" class="labelbox  labelpointer" style="' + style + '" ><div class="'
            //     + (f.faceAttributes.gender.toLowerCase() == "male" ? "malelabelboxborder" : "femalelabelboxborder") + '"></div></div>');
        }
    }
}