

export interface IApiResponse<R> {
    success: boolean;
    data?:R
    message?:string
    errors?: any
}

