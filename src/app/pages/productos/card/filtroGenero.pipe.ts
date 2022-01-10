import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroGenero'
})
export class FiltroGeneroPipe implements PipeTransform {

    transform(value: any, args?: any): any {
      const resultPosts = [];
      for(const post of value){
        if(post.genre.toLowerCase().indexOf(args) > -1){
           resultPosts.push(post);
        };
      };
      return resultPosts;
    }
}
