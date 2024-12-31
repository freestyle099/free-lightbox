import {
  Component,
  computed,
  input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'free-lightbox',
  imports: [NgOptimizedImage, NgClass],
  providers: [],
  templateUrl: './free-lightbox.component.html',
  styleUrl: './free-lightbox.component.scss',
})
export class FreeLightboxComponent implements OnInit {
  images = input<string[]>([]);
  imagesLength = computed(() => this.images().length);
  _activeIndex = input<number>(0, { alias: 'activeIndex' });
  activeIndex: WritableSignal<number> = signal(this._activeIndex());
  // close = output<void>();
  isOpen: WritableSignal<boolean> = signal(false);

  constructor() {}

  ngOnInit() {
    console.log('XXX', this.activeIndex());
  }

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  protected nextImage(event: Event): void {
    event.stopPropagation();
    this.activeIndex.set((this.activeIndex() + 1) % this.imagesLength());
  }

  protected previousImage(event: Event): void {
    event.stopPropagation();
    this.activeIndex.set(
      (this.activeIndex() - 1 + this.imagesLength()) % this.imagesLength(),
    );
  }

  onBackdropClick() {
    this.close();
  }

  getActiveImage(): string {
    return this.images()[this.activeIndex()];
  }

  doNothing(event: Event) {
    event.stopPropagation();
  }
}
