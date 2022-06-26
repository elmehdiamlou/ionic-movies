import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {
  AlertController,
  InfiniteScrollCustomEvent,
  LoadingController,
} from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  profile = null;
  movies = [];
  currentPage = 1;
  imageBaseURL = environment.imagesURL;
  search = '';

  constructor(
    private avatarService: AvatarService,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router,
    private moviesService: MovieService,
    private loadingCtrl: LoadingController
  ) {
    this.avatarService
      .getUserProfile()
      .subscribe((data) => (this.profile = data));
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });

    if (image) {
      const loading = await this.loadingController.create();
      loading.present();

      const result = await this.avatarService.uploadImage(image);
      loading.dismiss();

      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    let loading;
    if (!event) {
      loading = await this.loadingCtrl.create({
        message: 'Loading...',
        spinner: 'circles',
      });
      await loading.present();
    }
    if (this.search === '') {
      this.moviesService.getTopRatedMovies(this.currentPage).subscribe(
        (res: any) => {
          if (!event) {
            loading.dismiss();
          }
          this.movies.push(...res.results);

          event?.target.complete();
          if (event) {
            event.target.disabled = res.total_pages === this.currentPage;
          }
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  async searchMovie(movie) {
    this.search = movie;
    this.moviesService.getMoviesByName(movie).subscribe(
      (res: any) => {
        this.movies = res.results;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
