import { Component } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { HeroDetail } from './hero-detail.component';
import { Heroes } from './heroes.component';

export { Hero } from './hero.model';
export { Heroes } from './heroes.component';
export { HeroDetail } from './hero-detail.component';
export { HEROES } from './heroes.const';

@Component({
  selector:'hero-component',
  template: `
    <div class="parallax" style="background-image: url(../src/app/hero/KCregistro.jpg);">
      <h2>Yes ... you are invited</h2>
      
    </div>
  `,
  styleUrls: ['app/hero/hero.css'],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/detail',
    as: 'Detail',
    component: HeroDetail
  },
  {
    path: '/',
    as: 'List',
    component: Heroes
  }
])
export class HeroComponent {

}
