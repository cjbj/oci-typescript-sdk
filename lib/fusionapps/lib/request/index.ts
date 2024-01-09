/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeFusionEnvironmentCompartmentRequest from "./change-fusion-environment-compartment-request";
export import ChangeFusionEnvironmentCompartmentRequest = ChangeFusionEnvironmentCompartmentRequest.ChangeFusionEnvironmentCompartmentRequest;
import * as ChangeFusionEnvironmentFamilyCompartmentRequest from "./change-fusion-environment-family-compartment-request";
export import ChangeFusionEnvironmentFamilyCompartmentRequest = ChangeFusionEnvironmentFamilyCompartmentRequest.ChangeFusionEnvironmentFamilyCompartmentRequest;
import * as CreateDataMaskingActivityRequest from "./create-data-masking-activity-request";
export import CreateDataMaskingActivityRequest = CreateDataMaskingActivityRequest.CreateDataMaskingActivityRequest;
import * as CreateFusionEnvironmentRequest from "./create-fusion-environment-request";
export import CreateFusionEnvironmentRequest = CreateFusionEnvironmentRequest.CreateFusionEnvironmentRequest;
import * as CreateFusionEnvironmentAdminUserRequest from "./create-fusion-environment-admin-user-request";
export import CreateFusionEnvironmentAdminUserRequest = CreateFusionEnvironmentAdminUserRequest.CreateFusionEnvironmentAdminUserRequest;
import * as CreateFusionEnvironmentFamilyRequest from "./create-fusion-environment-family-request";
export import CreateFusionEnvironmentFamilyRequest = CreateFusionEnvironmentFamilyRequest.CreateFusionEnvironmentFamilyRequest;
import * as CreateRefreshActivityRequest from "./create-refresh-activity-request";
export import CreateRefreshActivityRequest = CreateRefreshActivityRequest.CreateRefreshActivityRequest;
import * as CreateServiceAttachmentRequest from "./create-service-attachment-request";
export import CreateServiceAttachmentRequest = CreateServiceAttachmentRequest.CreateServiceAttachmentRequest;
import * as DeleteFusionEnvironmentRequest from "./delete-fusion-environment-request";
export import DeleteFusionEnvironmentRequest = DeleteFusionEnvironmentRequest.DeleteFusionEnvironmentRequest;
import * as DeleteFusionEnvironmentAdminUserRequest from "./delete-fusion-environment-admin-user-request";
export import DeleteFusionEnvironmentAdminUserRequest = DeleteFusionEnvironmentAdminUserRequest.DeleteFusionEnvironmentAdminUserRequest;
import * as DeleteFusionEnvironmentFamilyRequest from "./delete-fusion-environment-family-request";
export import DeleteFusionEnvironmentFamilyRequest = DeleteFusionEnvironmentFamilyRequest.DeleteFusionEnvironmentFamilyRequest;
import * as DeleteRefreshActivityRequest from "./delete-refresh-activity-request";
export import DeleteRefreshActivityRequest = DeleteRefreshActivityRequest.DeleteRefreshActivityRequest;
import * as DeleteServiceAttachmentRequest from "./delete-service-attachment-request";
export import DeleteServiceAttachmentRequest = DeleteServiceAttachmentRequest.DeleteServiceAttachmentRequest;
import * as GetDataMaskingActivityRequest from "./get-data-masking-activity-request";
export import GetDataMaskingActivityRequest = GetDataMaskingActivityRequest.GetDataMaskingActivityRequest;
import * as GetFusionEnvironmentRequest from "./get-fusion-environment-request";
export import GetFusionEnvironmentRequest = GetFusionEnvironmentRequest.GetFusionEnvironmentRequest;
import * as GetFusionEnvironmentFamilyRequest from "./get-fusion-environment-family-request";
export import GetFusionEnvironmentFamilyRequest = GetFusionEnvironmentFamilyRequest.GetFusionEnvironmentFamilyRequest;
import * as GetFusionEnvironmentFamilyLimitsAndUsageRequest from "./get-fusion-environment-family-limits-and-usage-request";
export import GetFusionEnvironmentFamilyLimitsAndUsageRequest = GetFusionEnvironmentFamilyLimitsAndUsageRequest.GetFusionEnvironmentFamilyLimitsAndUsageRequest;
import * as GetFusionEnvironmentFamilySubscriptionDetailRequest from "./get-fusion-environment-family-subscription-detail-request";
export import GetFusionEnvironmentFamilySubscriptionDetailRequest = GetFusionEnvironmentFamilySubscriptionDetailRequest.GetFusionEnvironmentFamilySubscriptionDetailRequest;
import * as GetFusionEnvironmentStatusRequest from "./get-fusion-environment-status-request";
export import GetFusionEnvironmentStatusRequest = GetFusionEnvironmentStatusRequest.GetFusionEnvironmentStatusRequest;
import * as GetRefreshActivityRequest from "./get-refresh-activity-request";
export import GetRefreshActivityRequest = GetRefreshActivityRequest.GetRefreshActivityRequest;
import * as GetScheduledActivityRequest from "./get-scheduled-activity-request";
export import GetScheduledActivityRequest = GetScheduledActivityRequest.GetScheduledActivityRequest;
import * as GetServiceAttachmentRequest from "./get-service-attachment-request";
export import GetServiceAttachmentRequest = GetServiceAttachmentRequest.GetServiceAttachmentRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListAdminUsersRequest from "./list-admin-users-request";
export import ListAdminUsersRequest = ListAdminUsersRequest.ListAdminUsersRequest;
import * as ListDataMaskingActivitiesRequest from "./list-data-masking-activities-request";
export import ListDataMaskingActivitiesRequest = ListDataMaskingActivitiesRequest.ListDataMaskingActivitiesRequest;
import * as ListFusionEnvironmentFamiliesRequest from "./list-fusion-environment-families-request";
export import ListFusionEnvironmentFamiliesRequest = ListFusionEnvironmentFamiliesRequest.ListFusionEnvironmentFamiliesRequest;
import * as ListFusionEnvironmentsRequest from "./list-fusion-environments-request";
export import ListFusionEnvironmentsRequest = ListFusionEnvironmentsRequest.ListFusionEnvironmentsRequest;
import * as ListRefreshActivitiesRequest from "./list-refresh-activities-request";
export import ListRefreshActivitiesRequest = ListRefreshActivitiesRequest.ListRefreshActivitiesRequest;
import * as ListScheduledActivitiesRequest from "./list-scheduled-activities-request";
export import ListScheduledActivitiesRequest = ListScheduledActivitiesRequest.ListScheduledActivitiesRequest;
import * as ListServiceAttachmentsRequest from "./list-service-attachments-request";
export import ListServiceAttachmentsRequest = ListServiceAttachmentsRequest.ListServiceAttachmentsRequest;
import * as ListTimeAvailableForRefreshesRequest from "./list-time-available-for-refreshes-request";
export import ListTimeAvailableForRefreshesRequest = ListTimeAvailableForRefreshesRequest.ListTimeAvailableForRefreshesRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as ResetFusionEnvironmentPasswordRequest from "./reset-fusion-environment-password-request";
export import ResetFusionEnvironmentPasswordRequest = ResetFusionEnvironmentPasswordRequest.ResetFusionEnvironmentPasswordRequest;
import * as UpdateFusionEnvironmentRequest from "./update-fusion-environment-request";
export import UpdateFusionEnvironmentRequest = UpdateFusionEnvironmentRequest.UpdateFusionEnvironmentRequest;
import * as UpdateFusionEnvironmentFamilyRequest from "./update-fusion-environment-family-request";
export import UpdateFusionEnvironmentFamilyRequest = UpdateFusionEnvironmentFamilyRequest.UpdateFusionEnvironmentFamilyRequest;
import * as UpdateRefreshActivityRequest from "./update-refresh-activity-request";
export import UpdateRefreshActivityRequest = UpdateRefreshActivityRequest.UpdateRefreshActivityRequest;
import * as VerifyServiceAttachmentRequest from "./verify-service-attachment-request";
export import VerifyServiceAttachmentRequest = VerifyServiceAttachmentRequest.VerifyServiceAttachmentRequest;
