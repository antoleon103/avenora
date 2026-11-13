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
  path: 'activity/shape-builder',
  title: 'Shape Builder | Avenora',
  loadComponent: () =>
    import('./features/shape-builder/shape-builder').then(
      (m) => m.ShapeBuilder,
    ),
},
{
  path: 'activity/animal-match',
  title: 'Animal Match | Avenora',
  loadComponent: () =>
    import('./features/animal-match/animal-match').then(
      (m) => m.AnimalMatch,
    ),
},
{
  path: 'activity/the-little-cloud',
  title: 'The Little Cloud | Avenora',
  loadComponent: () =>
    import('./features/the-little-cloud/the-little-cloud').then(
      (m) => m.TheLittleCloud,
    ),
},
{
  path: 'activity/color-garden',
  title: 'Color Garden | Avenora',
  loadComponent: () =>
    import('./features/color-garden/color-garden').then(
      (m) => m.ColorGarden,
    ),
},
{
  path: 'activity/color-garden',
  loadComponent: () =>
    import('./features/color-garden/color-garden')
      .then(m => m.ColorGarden)
},
  {
    path: '**',
    redirectTo: '',
  },
];