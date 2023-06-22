import { PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 角色信息
 * @author: mfish
 * @date: 2022/11/14 16:24
 */
export interface SsoRole {
  id: string;
  tenantId: string;
  roleName: string;
  roleCode: string;
  roleSort: number;
  status: number;
  remark: string;
  delFlag: number;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
}

export type RolePageModel = PageResult<SsoRole>;
