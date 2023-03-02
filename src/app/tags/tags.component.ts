import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '../model/tag';
import { TagService } from '../tag.service';
import { Category } from '../model/category';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  constructor(private tagService: TagService) {}

  tags: Tag[] = [];

  getTags(): void {
    this.tags = this.tagService.getTags();
  }

  ngOnInit(): void {
    this.getTags();
    }


    @Input() tagFilter: Tag | undefined;
    @Output() newTagFilterEvent = new EventEmitter<Tag>();


    setTagFilter(tag: Tag) {
      this.tagFilter = tag;
      this.newTagFilterEvent.emit(tag);
    }
  
    clearFilters() {
      this.tagFilter = undefined;
    }
}

