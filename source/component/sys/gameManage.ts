/**
 * @author cinast
 */

/**
 * the file stored (binary) game, \
 * with api
 */
export interface gameFile {}

/**
 * file manger, 、
 * can recieve file from outer
 */
export declare let gameFiles: {
    current: string;

    def: Set<gameFile> & {};
    /**
     * add new files from you provided
     */
    readData: (file: File) => void;
};

/**
 * @deprecated
 */
export interface gameFileData extends Blob {}
