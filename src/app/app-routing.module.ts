import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { constants } from './shared/constants';

const routes: Routes = [
  {
    path: constants.routes.CHAT,
    loadChildren: () =>
      import('./feature/chat/chat.module').then((m) => m.ChatModule),
  },
  { path: '**', redirectTo: constants.routes.CHAT },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
