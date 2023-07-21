/// <reference types="multer" />
export declare class FilesController {
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
    }>;
}
