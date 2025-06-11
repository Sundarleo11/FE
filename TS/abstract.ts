abstract class TakePhoto {
  constructor(public camera: string, public lens: string) {}
  abstract Person(): void;
}

class instagram extends TakePhoto {
  constructor(camera: string, lens: string, message: string) {
    super(camera, lens);
  }

  public takePhoto() {
    console.log(
      `Taking photo with ${this.camera} and ${this.lens} on Instagram`
    );
  }
  Person(): void {
    console.log(
      `Person is taking a photo with ${this.camera} and ${this.lens}`
    );
  }
}

//  const p=new TakePhoto("Nikon", "50mm");

const p = new instagram("Nikon", "50mm", "Hello Instagram!");
p.takePhoto();

console.log(p instanceof instagram); // true

console.log("object " + p);
