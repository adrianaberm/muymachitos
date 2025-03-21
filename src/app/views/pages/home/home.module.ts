import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ComponentsModule } from '../../components/components.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [ HomeComponent],
    imports: [ NgxChartsModule, ComponentsModule , ReactiveFormsModule],
    exports: [ HomeComponent]
})

export class HomeModule {}
