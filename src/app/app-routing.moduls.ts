import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {CreatePageComponent} from "./create-page/create-page.component";
import {UpdatePageComponent} from "./update-page/update-page.component";


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'create', component: CreatePageComponent},
  {path: 'update/:id', component: UpdatePageComponent},

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

  }
)
export class AppRoutingModuls {

}
