import { BaseEntity, PageResult, ReqPage } from "/@/api/model/BaseModel";

/**
 * @description: 字典项
 * @Author: mfish
 * @Date: 2023-01-03
 * @version: V1.1.0
 */
export interface DictItem extends BaseEntity<string> {
  dictCode: string;
  dictLabel: string;
  dictValue: string | number | boolean;
  valueType: number;
  dictSort: number;
  color: string;
  status: number;
  remark: string;
}

export interface ReqDictItem extends ReqPage {
  dictId?: string;
  dictCode?: string;
  dictLabel?: string;
  dictValue?: string;
  status?: number;
}

export type DictItemPageModel = PageResult<DictItem>;
