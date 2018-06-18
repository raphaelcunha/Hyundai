import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { HeaderComponent } from './componets/header/header.component';
import { NotificationsComponent } from './componets/notifications/notifications.component';
import { CampaignsComponent } from './containers/campaigns/campaigns.component';
import { SubMenuComponent } from './componets/sub-menu/sub-menu.component';
import { ButtonComponent } from './componets/button/button.component';
import { UserComponent } from './componets/user/user.component';
import { MenuComponent } from './componets/menu/menu.component';
import { TableComponent } from './componets/table/table.component';
import { FooterComponent } from './componets/footer/footer.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    NotificationsComponent,
    CampaignsComponent,
    SubMenuComponent,
    ButtonComponent,
    UserComponent,
    MenuComponent,
    TableComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
