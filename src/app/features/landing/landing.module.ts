import { NgModule } from '@angular/core';
import { LandingComponent } from './components/landing-page/landing-page.component';
import { ControlsModule } from '../controls/controls.module';
import { FeaturesWidgetComponent } from './components/features-widget/features-widget.component';
import { AboutWidgetComponent } from './components/about-widget/about-widget.component';
import { UxJamsWidgetComponent } from './components/ux-jams-widget/ux-jams-widget.component';
import { OrderWidgetComponent } from './components/order-widget/order-widget.component';
import { FooterWidgetComponent } from './components/footer-widget/footer-widget.component';
import { TopBlockWidgetComponent } from './components/top-block-widget/top-block-widget.component';

@NgModule({
    imports: [ControlsModule],
    declarations: [
        LandingComponent,

        FeaturesWidgetComponent,
        AboutWidgetComponent,
        UxJamsWidgetComponent,
        OrderWidgetComponent,
        FooterWidgetComponent,
        TopBlockWidgetComponent,
    ],
    providers: [
    ],
})
export class LandingModule {
}
