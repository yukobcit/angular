import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from '../model/project';
import { PROJECTS } from '../data/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  project?: Project;
  projects = PROJECTS;

  constructor() {}

  getProjectById(id: number): Observable<Project | undefined> {
    const project = this.projects.find((p) => p.id === id);
    return of(project);
  }

  // Example usage
  ngOnInit() {
    const id = 2;
    this.getProjectById(id).subscribe((project) => {
      this.project = project;
    });
  }
}
