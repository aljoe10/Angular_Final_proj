import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }

    const emojiMap: { [key: string]: string } = {
      ':)': '₹',
      ':D': '😃',
      ':(': '😢',
      ':O': '😮',
      ':P': '😛',
      '<3': '❤️'
    };

    return value.replace(/(:\)|:D|:\(|:O|:P|<3)/g, match => emojiMap[match]);
  }
}