import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Avenora | Where Little Minds Grow',
    loadComponent: () =>
      import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'explore',
    title: 'Explore Activities | Avenora',
    loadComponent: () =>
      import('./features/explore/explore').then((m) => m.Explore),
  },
  {
    path: 'activity/count-the-stars',
    title: 'Count the Stars | Avenora',
    loadComponent: () =>
      import('./features/activity-player/activity-player').then(
        (m) => m.ActivityPlayer,
      ),
  },
  {
  path: 'activity/letter-safari',
  title: 'Letter Safari | Avenora',
  loadComponent: () =>
    import('./features/letter-safari/letter-safari').then(
      (m) => m.LetterSafari,
    ),
},
  {
    path: '**',
    redirectTo: '',
  },
];