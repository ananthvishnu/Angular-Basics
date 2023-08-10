import { LoggingService } from "./logging.service";

export class CounterService {
    activeToInActiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive(){
        this.activeToInActiveCounter ++ ;
        console.log('Active to Inactive:' + this.activeToInActiveCounter);
        
    }

    incrementInActiveToActive(){
        this.inactiveToActiveCounter ++ ;
        console.log('Inactive to Active:' + this.inactiveToActiveCounter);
        
    }
}