import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface GardenPicture {
  id: string;
  title: string;
  description: string;
  icon: string;
  regions: string[];
  referenceColors: Record<string, string>;
}

@Component({
  selector: 'app-color-garden',
  standalone: true,
  templateUrl: './color-garden.html',
  styleUrl: './color-garden.scss',
})
export class ColorGarden {
  constructor(private router: Router) {}

  isGameStarted = false;
  selectedPictureId = '';
  selectedColor = '#F6A6B8';
  showReference = false;

  readonly colors = [
    { name: 'Rose', value: '#F6A6B8' },
    { name: 'Coral', value: '#FF9278' },
    { name: 'Sunshine', value: '#FFD166' },
    { name: 'Lemon', value: '#F7E58B' },
    { name: 'Mint', value: '#91D8B2' },
    { name: 'Leaf', value: '#73B98B' },
    { name: 'Sky', value: '#8FC9F2' },
    { name: 'Lavender', value: '#B9A5E8' },
    { name: 'Purple', value: '#9478CF' },
    { name: 'Peach', value: '#F5C49B' },
    { name: 'Brown', value: '#A77B61' },
    { name: 'White', value: '#FFFFFF' },
  ];

  readonly pictures: GardenPicture[] = [
    {
      id: 'flower',
      title: 'Happy Flower',
      description: 'Give this lovely flower a splash of colour.',
      icon: '🌸',
      regions: [
        'petalOne', 'petalTwo', 'petalThree', 'petalFour',
        'petalFive', 'center', 'leafOne', 'leafTwo',
      ],
      referenceColors: {
        petalOne: '#F6A6B8',
        petalTwo: '#FF9278',
        petalThree: '#FFD166',
        petalFour: '#B9A5E8',
        petalFive: '#8FC9F2',
        center: '#FFD166',
        leafOne: '#73B98B',
        leafTwo: '#91D8B2',
      },
    },
    {
      id: 'butterfly',
      title: 'Magic Butterfly',
      description: 'Make the butterfly wings bright and beautiful.',
      icon: '🦋',
      regions: [
        'leftTop', 'leftBottom', 'rightTop', 'rightBottom',
        'body', 'leftSpot', 'rightSpot', 'antennaLeft', 'antennaRight',
      ],
      referenceColors: {
        leftTop: '#B9A5E8',
        leftBottom: '#8FC9F2',
        rightTop: '#F6A6B8',
        rightBottom: '#FFD166',
        body: '#73B98B',
        leftSpot: '#FFD166',
        rightSpot: '#91D8B2',
        antennaLeft: '#A77B61',
        antennaRight: '#A77B61',
      },
    },
    {
      id: 'rainbow',
      title: 'Rainbow Sky',
      description: 'Bring the sunshine and rainbow to life.',
      icon: '🌈',
      regions: [
        'sun', 'cloudLeft', 'cloudRight',
        'rainbowOne', 'rainbowTwo', 'rainbowThree',
        'rainbowFour', 'rainbowFive',
      ],
      referenceColors: {
        sun: '#FFD166',
        cloudLeft: '#FFFFFF',
        cloudRight: '#FFFFFF',
        rainbowOne: '#FF9278',
        rainbowTwo: '#FFD166',
        rainbowThree: '#91D8B2',
        rainbowFour: '#8FC9F2',
        rainbowFive: '#B9A5E8',
      },
    },
    {
      id: 'ocean',
      title: 'Ocean Friends',
      description: 'Explore an underwater world full of colour.',
      icon: '🐠',
      regions: [
        'fishBody', 'fishTail', 'fishFin', 'fishSpot',
        'seaweedOne', 'seaweedTwo', 'bubbleOne', 'bubbleTwo',
      ],
      referenceColors: {
        fishBody: '#FF9278',
        fishTail: '#FFD166',
        fishFin: '#B9A5E8',
        fishSpot: '#FFFFFF',
        seaweedOne: '#73B98B',
        seaweedTwo: '#91D8B2',
        bubbleOne: '#8FC9F2',
        bubbleTwo: '#8FC9F2',
      },
    },
    {
      id: 'space',
      title: 'Space Adventure',
      description: 'Design your own colourful rocket and planets.',
      icon: '🚀',
      regions: [
        'rocketBody', 'rocketTip', 'rocketFinLeft',
        'rocketFinRight', 'window', 'planetOne',
        'planetTwo', 'starOne', 'starTwo',
      ],
      referenceColors: {
        rocketBody: '#FFFFFF',
        rocketTip: '#FF9278',
        rocketFinLeft: '#8FC9F2',
        rocketFinRight: '#B9A5E8',
        window: '#8FC9F2',
        planetOne: '#FFD166',
        planetTwo: '#91D8B2',
        starOne: '#FFD166',
        starTwo: '#F6A6B8',
      },
    },
  ];

  pictureColors: Record<string, Record<string, string>> = {};
  pictureCompleted: Record<string, Record<string, boolean>> = {};

  get selectedPicture(): GardenPicture {
    return this.pictures.find(
      (picture) => picture.id === this.selectedPictureId,
    ) ?? this.pictures[0];
  }

  get selectedColorName(): string {
    return this.colors.find(
      (color) => color.value === this.selectedColor,
    )?.name ?? 'Custom';
  }

  get completedRegions(): number {
    const completed = this.pictureCompleted[this.selectedPictureId] ?? {};
    return Object.values(completed).filter(Boolean).length;
  }

  get totalRegions(): number {
    return this.selectedPicture.regions.length;
  }

  get progress(): number {
    return this.totalRegions
      ? Math.round((this.completedRegions / this.totalRegions) * 100)
      : 0;
  }

  get allColored(): boolean {
    return this.totalRegions > 0 &&
      this.completedRegions === this.totalRegions;
  }

  get completedPictures(): number {
    return this.pictures.filter((picture) => {
      const completed = this.pictureCompleted[picture.id] ?? {};
      return picture.regions.every((region) => completed[region]);
    }).length;
  }

  get compliment(): string {
    return 'You are a little artist! Your picture looks beautiful.';
  }

  startGame(): void {
    this.isGameStarted = true;
    this.selectedPictureId = '';
  }

  selectPicture(pictureId: string): void {
    this.selectedPictureId = pictureId;
    this.showReference = false;
  }

  backToGallery(): void {
    this.showReference = false;
    this.isGameStarted = true;
    this.selectedPictureId = '';
  }

  getRegionColor(region: string): string {
    if (this.showReference) {
      return this.selectedPicture.referenceColors[region] ?? '#FFFFFF';
    }

    return this.pictureColors[this.selectedPictureId]?.[region] ?? '#FFFFFF';
  }

  fillRegion(region: string): void {
    if (this.showReference || !this.selectedPictureId) return;

    if (!this.pictureColors[this.selectedPictureId]) {
      this.pictureColors[this.selectedPictureId] = {};
    }

    if (!this.pictureCompleted[this.selectedPictureId]) {
      this.pictureCompleted[this.selectedPictureId] = {};
    }

    this.pictureColors[this.selectedPictureId][region] = this.selectedColor;
    this.pictureCompleted[this.selectedPictureId][region] = true;
  }

  selectColor(color: string): void {
    this.selectedColor = color;
    this.showReference = false;
  }

  toggleReference(): void {
    this.showReference = !this.showReference;
  }

  isPictureCompleted(picture: GardenPicture): boolean {
    const completed = this.pictureCompleted[picture.id] ?? {};
    return picture.regions.every((region) => completed[region]);
  }

  hasPictureProgress(pictureId: string): boolean {
    const completed = this.pictureCompleted[pictureId] ?? {};
    return Object.values(completed).some(Boolean);
  }

  resetPicture(): void {
    if (!this.selectedPictureId) return;

    this.showReference = false;
    this.pictureColors[this.selectedPictureId] = {};
    this.pictureCompleted[this.selectedPictureId] = {};
    this.selectedColor = '#F6A6B8';
  }

  goToExplore(): void {
    this.router.navigate(['/explore']);
  }
}