import { MessageSchema, PermissionType } from "./enum";
import { Result } from "./Result";
import { ToastrService } from 'ngx-toastr';

export enum toastType {
    success,
    warning,
    info,
    error
}

export class MessageController {

    // constructor() {
    //     MessageManager.toaster = toaster;
    // }

    public static toaster: ToastrService;

    private static type: toastType;

    public static DisplayName: string = '';

    public static ShowMessage(value: string, type: toastType): void;
    public static ShowMessage(value: MessageSchema): void;
    public static ShowMessage(value: Result): void;
    public static ShowMessage(value: string | MessageSchema | Result, type: toastType = toastType.success): void {
        console.log(value.toString());

        let message: string = '';
        this.type = type;
        if (value instanceof Result) {
            if (value.id == -2146232060) {
                MessageController.ShowMessage(MessageSchema.DuplicatedRecord);
                return;
            }
            message = value.message.replace('\r\n', '<hr>');
            this.type = toastType.error;
        }
        else if (typeof value === 'string') {
            message = value.replace('\r\n', '<hr>');
            this.type = type;
        }
        else { // value is MessageType
            message = this.GetMessage(value);
            this.show(message, value);
            return;
        }

        this.show(message);
    }

    private static show(message: string, messageType: MessageSchema = MessageSchema.ListIsEmpty) {
        console.log('Central Message Controller ....');
        console.log("MessageType : ", messageType);
        console.log("Message : ", message);
        return;

        let header = this.GetHeader(messageType);

        switch (this.type) {
            case toastType.success: {
                this.toaster.success(message, header);
                break;
            }
            case toastType.info: {
                this.toaster.info(message, header);
                break;
            }
            case toastType.error: {
                this.toaster.error(message, header);
                break;
            }
            case toastType.warning: {
                this.toaster.warning(message, header);
                break;
            }
        }
    }

    public static LogError(error: Result | string, data: string = ''): void {
        console.log(data, error);
    }

    public static ShowMessageByPermissionType(permissionType: PermissionType): void {
        switch (permissionType) {
            case PermissionType.ViewIndexPermission: {
                MessageController.ShowMessage(MessageSchema.ViewIndexPermissionDenied);
                break;
            }
            case PermissionType.Add: {
                MessageController.ShowMessage(MessageSchema.AddPermissionDenied);
                break;
            }
            case PermissionType.Edit: {
                this.ShowMessage(MessageSchema.EditPermissionDenied);
                break;
            }
            case PermissionType.Delete: {
                this.ShowMessage(MessageSchema.DeletePermissionDenied);
                break;
            }
            case PermissionType.Retrieve: {
                this.ShowMessage(MessageSchema.RetrievePermissionDenied);
                break;
            }
            case PermissionType.ViewLog: {
                this.ShowMessage(MessageSchema.ViewLogPermissionDenied);
                break;
            }

        }

    }


    private static GetHeader(messageType: MessageSchema | null = null): string {
        if (messageType == null) {
            switch (this.type) {
                case toastType.success: return 'Successed...';
                case toastType.warning: return 'Warning!';
                case toastType.info: return 'Attention Please!';
                case toastType.error: return 'Error!';
            }
        }

        let header = '';
        //this.type = toastType.error;
        switch (messageType) {
            case MessageSchema.ViewLogPermissionDenied:
            case MessageSchema.ViewIndexPermissionDenied:
            case MessageSchema.AddPermissionDenied:
            case MessageSchema.EditPermissionDenied:
            case MessageSchema.DeletePermissionDenied:
            case MessageSchema.RetrievePermissionDenied: {
                header = 'Access is Denied!'
                break;
            }
            case MessageSchema.SelectedRecordNotConfirmed: {
                header = `Record is not Valid!`
                break;
            }
            case MessageSchema.Welcome: {
                header = `Welcome`;
                break;
            }
            case MessageSchema.ConfirmPasswordNotMatch: {
                header = `Passwords Didn't Matched!`;
                break;
            }
            case MessageSchema.NoValidEntity: {
                header = `Entity is not Valid!`
                break;
            }
            case MessageSchema.NotEditable: {
                header = `Record is not Editable!`
                break;
            }
            case MessageSchema.NotDelteable: {
                header = `Record is not Deleteable!`
                break;
            }
            case MessageSchema.ListIsEmpty: {
                header = 'List is Empty!';
                break;
            }
            case MessageSchema.DuplicatedRecord: {
                header = 'Duplicated Occured!';
                break;
            }
            case MessageSchema.EndOfEvaluation: {
                header = 'Evaluation is Finished!';
                break;
            }
            case MessageSchema.UserNameOrPasswordNotAccepted: {
                header = 'Incorrect UserName or Password';
                break;
            }
        }

        return header;
    }

    private static GetMessage(messageType: MessageSchema): string {
        let message = '';
        this.type = toastType.error;
        switch (messageType) {
            case MessageSchema.ViewLogPermissionDenied: {
                message = `your Access to View record Logs of this Entity is denied by IDP Admin!...`;
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.ViewIndexPermissionDenied: {
                message = 'your Access to View Index Page of this Entity is denied by IDP Admin!...';
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.AddPermissionDenied: {
                message = 'Add permission of this Entity is denied!';
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.EditPermissionDenied: {
                message = 'Edit permission of this Entity is denied for you!';
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.DeletePermissionDenied: {
                message = 'Delete permission of this Entity is denied for you!';
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.RetrievePermissionDenied: {
                message = 'View this page of this Entity is denied for you!';
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.SelectedRecordNotConfirmed: {
                message = `The Selected Record is not Valid!`
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.Welcome: {
                message = `Welcome to Cobel Darou HR Portal`;
                this.type = toastType.success;
                break;
            }
            case MessageSchema.ConfirmPasswordNotMatch: {
                message = `Password and RePassword are not matched!`;
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.NoValidEntity: {
                message = `Current Entity value is not Valid!`
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.NotEditable: {
                message = `Selected Record is not Editable!`;
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.NotDelteable: {
                message = `Selected Record is not deleteable!`
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.ListIsEmpty: {
                message = 'Send List is Empty!';
                this.type = toastType.info;
                break;
            }
            case MessageSchema.DuplicatedRecord: {
                message = 'Entered Value is Duplicated!';
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.EndOfEvaluation: {
                message = 'Your Evaluation is finished and Saved in out DataBase!';
                this.type = toastType.success;
                break;
            }
            case MessageSchema.QuestionnaireIsDone: {
                message = 'Selected Questionary is Done! You can not ReAnswer it';
                this.type = toastType.error;
                break;
            }
            case MessageSchema.QuestionnaireIsNotAvailable: {
                message = 'Selected Questionary is not available at present!';
                this.type = toastType.warning;
                break;
            }
            case MessageSchema.UserNameOrPasswordNotAccepted: {
                message = 'UserName or Password is not Valid!';
                this.type = toastType.error;
                break;
            }
        }

        return `<hr>Dear User .. ${this.DisplayName}<br>${message}`;
    }

}