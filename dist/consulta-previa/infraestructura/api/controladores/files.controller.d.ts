/// <reference types="multer" />
import { Response } from 'express';
export declare class FilesController {
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
    }>;
    downloadFile(filename: string, res: Response): Promise<void>;
}
