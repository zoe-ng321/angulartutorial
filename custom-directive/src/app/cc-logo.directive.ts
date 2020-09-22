import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCcLogo]'
})
export class CcLogoDirective {
  @HostBinding('src') imageSrc
  @HostBinding('hidden') isHidden:boolean
  @Input() ccNumber:string=""

  constructor() { }

  getCCType():string{
    if (this.ccNumber.startsWith("4")){
      return "visa"
    }else if (this.ccNumber.startsWith("3")){
      return "mastercard"
    }else if (this.ccNumber.startsWith("5")){
      return "amex"
    }
  }

  ngOnChanges(){
    const ccType = this.getCCType()
    this.isHidden = ccType == undefined
    this.imageSrc = `/assets/${ccType}.png`
  }
}
