import { Component, signal } from '@angular/core';

type grade = 'A'|'B'|'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {
  public showContent = signal(false)
  public showNota = signal<grade>('A')
  public frameworks = signal(['angular', 'vue', 'react'])
  public frameworks2 = signal(['angular'])

  public toggleContent() {
    this.showContent.update(value => !value) 
  }

  public toggleNota(){
    this.showNota.update(value => value ?? 'B')
  }
}
