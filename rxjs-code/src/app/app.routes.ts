import { Routes } from '@angular/router';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { MultipleSubscriptionsComponent } from './multiple-subscriptions/multiple-subscriptions.component';
import { CounterUnsubscriptionExampleComponent } from './counter-unsubscription-example/counter-unsubscription-example.component';
import { ColdObservableComponent } from './cold-observable/cold-observable.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { CreationFunctionsComponent } from './creation-functions/creation-functions.component';
import { FilterOperatorComponent } from './filter-operator/filter-operator.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { TapOperatorComponent } from './tap-operator/tap-operator.component';
import { DebounceTimeOperatorComponent } from './debounce-time-operator/debounce-time-operator.component';
import { CatchErrorOperatorComponent } from './catch-error-operator/catch-error-operator.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/chapters',
    pathMatch: 'full',
  },
  {
    path: 'chapters',
    component: ChaptersComponent,
  },
  {
    path: 'observable-example',
    component: ObservableExampleComponent,
  },
  {
    path: 'multiple-subscriptions',
    component: MultipleSubscriptionsComponent,
  },
  {
    path: 'counter-unsubscription-example',
    component: CounterUnsubscriptionExampleComponent,
  },
  {
    path: 'cold-observable',
    component: ColdObservableComponent,
  },
  {
    path: 'creation-functions',
    component: CreationFunctionsComponent
  },
  {
    path: 'filter-operator',
    component: FilterOperatorComponent
  },
  {
    path: 'map-operator',
    component: MapOperatorComponent
  },
  {
    path: 'tap-operator',
    component: TapOperatorComponent
  },
  {
    path: 'debounceTime-operator',
    component: DebounceTimeOperatorComponent
  },
  {
    path: 'catchError-operator',
    component: CatchErrorOperatorComponent
  }
];
