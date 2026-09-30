export type CampaignStatus = "DRAFT" | "SCHEDULED" | "SENDING" | "PAUSED" | "COMPLETED" | "PARTIAL" | "FAILED" | "STOPPED";
export type Role = "SUPER_ADMIN" | "ADMIN" | "HR" | "VIEWER";
export interface Campaign { id:string; name:string; subject:string; groups:string[]; sender:string; recipients:number; sent:number; failed:number; pending:number; status:CampaignStatus; createdAt:string; }
export interface Contact { id:string; fullName:string; email:string; employeeId:string; department:string; group:string; status:"ACTIVE"|"INACTIVE"; }
export interface ContactGroup { id:string; name:string; description:string; senderAccount:string; replyTo:string; signature:string; contactCount:number; status:"ACTIVE"|"INACTIVE"; }
export interface SenderAccount { id:string; accountName:string; fromName:string; fromEmail:string; domain:string; replyTo:string; smtpHost:string; smtpPort:number; security:string; status:"ACTIVE"|"INACTIVE"; assignedGroup:string; }
export interface EmailTemplate { id:string; name:string; subject:string; lastUpdated:string; signature:string; html:string; }
export const emptyData = { campaigns:[] as Campaign[], contacts:[] as Contact[], groups:[] as ContactGroup[], senders:[] as SenderAccount[], templates:[] as EmailTemplate[], audit:[] as never[], users:[] as never[] };
