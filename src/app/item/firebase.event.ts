import { Subject } from 'rxjs';

export class FirebaseEvent {
    public static firebaseEvent: Subject<any> = new Subject();
}
