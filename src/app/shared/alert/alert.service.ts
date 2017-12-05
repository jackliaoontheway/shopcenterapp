import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class AlertService {

  constructor(public snackBar: MatSnackBar) { }

      actionButtonLabel: string;
      action: boolean;
      setAutoHide: boolean ;
      autoHide: number;
      addExtraClass: boolean;

      // 成功
      public alertSuccess(msg) {
          const config = new MatSnackBarConfig();
          config.duration = this.autoHide;
          config.extraClasses = ['alertSuccess'];
          this.snackBar.open(msg, this.action && this.actionButtonLabel, config);
      }

      // 警告
      public alertWarning(msg) {
        const config = new MatSnackBarConfig();
          config.duration = this.autoHide;
          config.extraClasses = ['alertWarning'];
          this.snackBar.open(msg, this.action && this.actionButtonLabel, config);
      }
      // 失败
      public alertFail(msg) {
        const config = new MatSnackBarConfig();
          config.duration = this.autoHide;
          config.extraClasses = ['alertFail'];
          this.snackBar.open(msg, this.action && this.actionButtonLabel, config);
      }

}
