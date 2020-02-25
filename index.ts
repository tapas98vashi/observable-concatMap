import { of, from } from 'rxjs'; 
import { map, delay, mergeMap, concatMap } from 'rxjs/operators';

const getData = (param) => {
  const delayTime = Math.floor(Math.random() * 10000) + 1;
  return of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
    delay(delayTime)
  )
}

// using a regular map
from(['rivet','tapas','valsad','angular']).pipe(
  map(param => getData(param))
).subscribe(val => val.subscribe(data => console.log('map:', data)));

// using concatMap
from(['rivet','tapas','valsad','angular']).pipe(
  concatMap(param => getData(param))
).subscribe(val => console.log('concatMap:', val));
