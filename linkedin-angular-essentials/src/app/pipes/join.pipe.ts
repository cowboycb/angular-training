import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(mediaItems, ...args: string[]): string {

    let values = [];
    mediaItems.forEach(item => {
      if (values.indexOf(item.name) <= -1){
          values.push(item.name);
      }
    });
    let delimeter = args.length>0 ? args[0] : ',';
    return values.join(delimeter);
  }

}
