export interface IError {
    code: string;  
}

export interface ErrorResponse<R> {
    success: boolean;
    data?:R
    errors?: IError
}