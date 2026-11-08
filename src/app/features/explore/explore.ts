import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

type AgeGroup = '3-4' | '5-6' | '7-8';

type CategoryId =
  | 'all'
  | 'literacy'
  | 'numbers'
  | 'shapes'
  | 'logic'
  | 'stories'
  | 'creativity';

interface AgeOption {
  value: AgeGroup;
  label: string;
  description: string;
}

interface LearningCategory {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  color: string;
  softColor: string;
  ageGroups: AgeGroup[];
}

interface LearningActivity {
  route?: string;
  available?: boolean;
  id: number;
  title: string;
  description: string;
  categoryId: CategoryId;
  categoryName: string;
  ageGroups: AgeGroup[];
  duration: string;
  level: string;
  icon: string;
  color: string;
  artClass: string;
}

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore.html',
  styleUrl: './explore.scss',
})
export class Explore {
  selectedAge: AgeGroup = '3-4';
  selectedCategory: CategoryId = 'all';

  constructor(private router: Router) {}
  
  readonly ageGroups: AgeOption[] = [
    {
      value: '3-4',
      label: '3–4 years',
      description: 'Explore',
    },
    {
      value: '5-6',
      label: '5–6 years',
      description: 'Discover',
    },
    {
      value: '7-8',
      label: '7–8 years',
      description: 'Challenge',
    },
  ];

  readonly categories: LearningCategory[] = [
    {
      id: 'literacy',
      name: 'Letters & Words',
      description: 'Sounds, letters and early reading',
      icon: '🔤',
      color: '#F4A261',
      softColor: '#FFF0DF',
      ageGroups: ['3-4', '5-6', '7-8'],
    },
    {
      id: 'numbers',
      name: 'Numbers',
      description: 'Counting and number fun',
      icon: '🔢',
      color: '#6C8FE6',
      softColor: '#EAF0FF',
      ageGroups: ['3-4', '5-6', '7-8'],
    },
    {
      id: 'shapes',
      name: 'Shapes & Colors',
      description: 'Discover colors and patterns',
      icon: '🎨',
      color: '#E985B4',
      softColor: '#FCEAF3',
      ageGroups: ['3-4', '5-6'],
    },
    {
      id: 'logic',
      name: 'Memory & Logic',
      description: 'Think, match and solve',
      icon: '🧩',
      color: '#7DBB91',
      softColor: '#E8F6EC',
      ageGroups: ['3-4', '5-6', '7-8'],
    },
    {
      id: 'stories',
      name: 'Stories',
      description: 'Listen and imagine',
      icon: '📚',
      color: '#A18AE0',
      softColor: '#F0EBFF',
      ageGroups: ['3-4', '5-6', '7-8'],
    },
    {
      id: 'creativity',
      name: 'Creative Studio',
      description: 'Draw, color and create',
      icon: '🖍️',
      color: '#E7B84F',
      softColor: '#FFF6DB',
      ageGroups: ['3-4', '5-6', '7-8'],
    },
  ];

  readonly activities: LearningActivity[] = [
    {
      id: 1,
      title: 'Letter Safari',
      route: '/activity/letter-safari',
      available: true,
      description: 'Find letters hiding in a playful jungle.',
      categoryId: 'literacy',
      categoryName: 'Letters & Words',
      ageGroups: ['3-4', '5-6'],
      duration: '5 min',
      level: 'Beginner',
      icon: '🦋',
      color: '#F4A261',
      artClass: 'art-safari',
    },
    {
      id: 2,
      title: 'Count the Stars',
      route: '/activity/count-the-stars',
      available: true,
      description: 'Count shining stars and learn numbers.',
      categoryId: 'numbers',
      categoryName: 'Numbers',
      ageGroups: ['3-4', '5-6'],
      duration: '4 min',
      level: 'Beginner',
      icon: '⭐',
      color: '#6C8FE6',
      artClass: 'art-stars',
    },
    {
      id: 3,
      title: 'Shape Builder',
      description: 'Build pictures using colorful shapes.',
      categoryId: 'shapes',
      categoryName: 'Shapes & Colors',
      ageGroups: ['3-4', '5-6'],
      duration: '6 min',
      level: 'Beginner',
      icon: '🔺',
      color: '#E985B4',
      artClass: 'art-shapes',
    },
    {
      id: 4,
      title: 'Animal Match',
      description: 'Match animals with their shadows.',
      categoryId: 'logic',
      categoryName: 'Memory & Logic',
      ageGroups: ['3-4', '5-6', '7-8'],
      duration: '5 min',
      level: 'Easy',
      icon: '🐘',
      color: '#7DBB91',
      artClass: 'art-animals',
    },
    {
      id: 5,
      title: 'The Little Cloud',
      description: 'A gentle story about a cloud finding its way.',
      categoryId: 'stories',
      categoryName: 'Stories',
      ageGroups: ['3-4', '5-6'],
      duration: '7 min',
      level: 'Listen',
      icon: '☁️',
      color: '#A18AE0',
      artClass: 'art-cloud',
    },
    {
      id: 6,
      title: 'Color Garden',
      description: 'Create a garden full of your favorite colors.',
      categoryId: 'creativity',
      categoryName: 'Creative Studio',
      ageGroups: ['3-4', '5-6', '7-8'],
      duration: '10 min',
      level: 'Create',
      icon: '🌷',
      color: '#E7B84F',
      artClass: 'art-garden',
    },
    {
      id: 7,
      title: 'Word Detective',
      description: 'Solve clues and discover new words.',
      categoryId: 'literacy',
      categoryName: 'Letters & Words',
      ageGroups: ['5-6', '7-8'],
      duration: '6 min',
      level: 'Intermediate',
      icon: '🔎',
      color: '#F4A261',
      artClass: 'art-detective',
    },
    {
      id: 8,
      title: 'Number Trail',
      description: 'Follow number clues to reach the treasure.',
      categoryId: 'numbers',
      categoryName: 'Numbers',
      ageGroups: ['5-6', '7-8'],
      duration: '7 min',
      level: 'Intermediate',
      icon: '🗺️',
      color: '#6C8FE6',
      artClass: 'art-trail',
    },
    {
      id: 9,
      title: 'Pattern Puzzle',
      description: 'Spot patterns and complete each sequence.',
      categoryId: 'logic',
      categoryName: 'Memory & Logic',
      ageGroups: ['5-6', '7-8'],
      duration: '8 min',
      level: 'Challenge',
      icon: '🧠',
      color: '#7DBB91',
      artClass: 'art-puzzle',
    },
    {
      id: 10,
      title: 'Story Maker',
      description: 'Imagine what happens next in the story.',
      categoryId: 'stories',
      categoryName: 'Stories',
      ageGroups: ['7-8'],
      duration: '8 min',
      level: 'Create',
      icon: '📖',
      color: '#A18AE0',
      artClass: 'art-story',
    },
  ];

  /**
   * Categories available for the currently selected age group.
   */
  get filteredCategories(): LearningCategory[] {
    return this.categories.filter((category) =>
      category.ageGroups.includes(this.selectedAge),
    );
  }

  /**
   * Activities filtered by both selected age group and category.
   */
  get filteredActivities(): LearningActivity[] {
    return this.activities.filter((activity) => {
      const matchesAge = activity.ageGroups.includes(this.selectedAge);

      const matchesCategory =
        this.selectedCategory === 'all' ||
        activity.categoryId === this.selectedCategory;

      return matchesAge && matchesCategory;
    });
  }

  /**
   * Heading for the activities section.
   */
  get selectedCategoryName(): string {
    if (this.selectedCategory === 'all') {
      return 'Activities for you';
    }

    return (
      this.categories.find(
        (category) => category.id === this.selectedCategory,
      )?.name ?? 'Activities for you'
    );
  }

  /**
   * Change age group and reset category selection
   * so an unavailable category is never left selected.
   */
  selectAge(age: AgeGroup): void {
    this.selectedAge = age;
    this.selectedCategory = 'all';
  }

  /**
   * Select a category only if it is available
   * for the currently selected age group.
   */
  selectCategory(category: CategoryId): void {
    if (category === 'all') {
      this.selectedCategory = 'all';
      return;
    }

    const categoryIsAvailable = this.filteredCategories.some(
      (item) => item.id === category,
    );

    if (categoryIsAvailable) {
      this.selectedCategory = category;
    }
  }

  /**
   * Placeholder until the activity player route is implemented.
   */
  startActivity(activity: LearningActivity): void {
  if (activity.available && activity.route) {
    this.router.navigate([activity.route]);
  }
}
}