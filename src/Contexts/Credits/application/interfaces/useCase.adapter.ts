import { Result } from "../../infrastructure/utils/error/result.template";

export interface IUseCase<Request, Response> {
  execute(data?: Request, params?): Promise<Result<Response>>;
}