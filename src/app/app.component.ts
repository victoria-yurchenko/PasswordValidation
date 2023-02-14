import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'assignment';
  input: string = '';

  onInput(event: any) {

    this.input = event.target.value;

    this.checkPassword();
  }

  checkPassword() {

    if (this.input.length == 0)
      this.changeDivBackgroundColor('#eee', '#eee', '#eee');
    else if (this.input.length < 8)
      this.changeDivBackgroundColor('#db4646', '#db4646', '#db4646', 'Too short');
    else if (this.isEasyPassword())
      this.changeDivBackgroundColor('#db4646', '#db4646', '#eee', 'Too easy');
    else if (this.isMediumPassword())
      this.changeDivBackgroundColor('#dceb36', '#dceb36', '#eee', 'Medium');
    else if (this.isHardPassword())
      this.changeDivBackgroundColor('#38eb5c', '#38eb5c', '#38eb5c', 'Strong');
  }

  changeDivBackgroundColor(easyColor: string, mediumColor: string, strongColor: string, text: string = '') {

    let easy = document.getElementById('easy');
    let medium = document.getElementById('medium');
    let strong = document.getElementById('strong');
    let p = document.getElementById('text');

    easy?.style.setProperty('background-color', easyColor);
    medium?.style.setProperty('background-color', mediumColor);
    strong?.style.setProperty('background-color', strongColor);
    
    if (p != undefined)
      p.innerHTML = text;
  }

  isEasyPassword(): boolean {

    if ((this.isContainsLetters() && !this.isContainsDigits() && !this.isContainsSymbols()) ||
        (!this.isContainsLetters() && this.isContainsDigits() && !this.isContainsSymbols()) ||
        (!this.isContainsLetters() && !this.isContainsDigits() && this.isContainsSymbols()))
      return true;

    return false;
  }

  isMediumPassword(): boolean {

    if ((this.isContainsLetters() && this.isContainsSymbols() && !this.isContainsDigits()) ||
        (this.isContainsLetters() && this.isContainsDigits() && !this.isContainsSymbols()) ||
        (this.isContainsDigits() && this.isContainsSymbols() && !this.isContainsLetters()))
      return true;

    return false;
  }

  isHardPassword(): boolean {

    if (this.isContainsLetters() && this.isContainsDigits() && this.isContainsSymbols())
      return true;

    return false;
  }

  isContainsLetters(): boolean {
    return /.*[a-zA-Z].*/.test(this.input);
  }

  isContainsDigits(): boolean {
    return /.*[0-9].*/.test(this.input);
  }

  isContainsSymbols(): boolean {
    return /.*[@#$*|].*/.test(this.input);
  }

}
