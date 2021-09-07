/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AddManagedDatabaseToManagedDatabaseGroupResponse from "./add-managed-database-to-managed-database-group-response";
export import AddManagedDatabaseToManagedDatabaseGroupResponse = AddManagedDatabaseToManagedDatabaseGroupResponse.AddManagedDatabaseToManagedDatabaseGroupResponse;
import * as ChangeDatabaseParametersResponse from "./change-database-parameters-response";
export import ChangeDatabaseParametersResponse = ChangeDatabaseParametersResponse.ChangeDatabaseParametersResponse;
import * as ChangeDbManagementPrivateEndpointCompartmentResponse from "./change-db-management-private-endpoint-compartment-response";
export import ChangeDbManagementPrivateEndpointCompartmentResponse = ChangeDbManagementPrivateEndpointCompartmentResponse.ChangeDbManagementPrivateEndpointCompartmentResponse;
import * as ChangeJobCompartmentResponse from "./change-job-compartment-response";
export import ChangeJobCompartmentResponse = ChangeJobCompartmentResponse.ChangeJobCompartmentResponse;
import * as ChangeManagedDatabaseGroupCompartmentResponse from "./change-managed-database-group-compartment-response";
export import ChangeManagedDatabaseGroupCompartmentResponse = ChangeManagedDatabaseGroupCompartmentResponse.ChangeManagedDatabaseGroupCompartmentResponse;
import * as CreateDbManagementPrivateEndpointResponse from "./create-db-management-private-endpoint-response";
export import CreateDbManagementPrivateEndpointResponse = CreateDbManagementPrivateEndpointResponse.CreateDbManagementPrivateEndpointResponse;
import * as CreateJobResponse from "./create-job-response";
export import CreateJobResponse = CreateJobResponse.CreateJobResponse;
import * as CreateManagedDatabaseGroupResponse from "./create-managed-database-group-response";
export import CreateManagedDatabaseGroupResponse = CreateManagedDatabaseGroupResponse.CreateManagedDatabaseGroupResponse;
import * as DeleteDbManagementPrivateEndpointResponse from "./delete-db-management-private-endpoint-response";
export import DeleteDbManagementPrivateEndpointResponse = DeleteDbManagementPrivateEndpointResponse.DeleteDbManagementPrivateEndpointResponse;
import * as DeleteJobResponse from "./delete-job-response";
export import DeleteJobResponse = DeleteJobResponse.DeleteJobResponse;
import * as DeleteManagedDatabaseGroupResponse from "./delete-managed-database-group-response";
export import DeleteManagedDatabaseGroupResponse = DeleteManagedDatabaseGroupResponse.DeleteManagedDatabaseGroupResponse;
import * as GetAwrDbReportResponse from "./get-awr-db-report-response";
export import GetAwrDbReportResponse = GetAwrDbReportResponse.GetAwrDbReportResponse;
import * as GetAwrDbSqlReportResponse from "./get-awr-db-sql-report-response";
export import GetAwrDbSqlReportResponse = GetAwrDbSqlReportResponse.GetAwrDbSqlReportResponse;
import * as GetClusterCacheMetricResponse from "./get-cluster-cache-metric-response";
export import GetClusterCacheMetricResponse = GetClusterCacheMetricResponse.GetClusterCacheMetricResponse;
import * as GetDatabaseFleetHealthMetricsResponse from "./get-database-fleet-health-metrics-response";
export import GetDatabaseFleetHealthMetricsResponse = GetDatabaseFleetHealthMetricsResponse.GetDatabaseFleetHealthMetricsResponse;
import * as GetDatabaseHomeMetricsResponse from "./get-database-home-metrics-response";
export import GetDatabaseHomeMetricsResponse = GetDatabaseHomeMetricsResponse.GetDatabaseHomeMetricsResponse;
import * as GetDbManagementPrivateEndpointResponse from "./get-db-management-private-endpoint-response";
export import GetDbManagementPrivateEndpointResponse = GetDbManagementPrivateEndpointResponse.GetDbManagementPrivateEndpointResponse;
import * as GetJobResponse from "./get-job-response";
export import GetJobResponse = GetJobResponse.GetJobResponse;
import * as GetJobExecutionResponse from "./get-job-execution-response";
export import GetJobExecutionResponse = GetJobExecutionResponse.GetJobExecutionResponse;
import * as GetJobRunResponse from "./get-job-run-response";
export import GetJobRunResponse = GetJobRunResponse.GetJobRunResponse;
import * as GetManagedDatabaseResponse from "./get-managed-database-response";
export import GetManagedDatabaseResponse = GetManagedDatabaseResponse.GetManagedDatabaseResponse;
import * as GetManagedDatabaseGroupResponse from "./get-managed-database-group-response";
export import GetManagedDatabaseGroupResponse = GetManagedDatabaseGroupResponse.GetManagedDatabaseGroupResponse;
import * as GetPdbMetricsResponse from "./get-pdb-metrics-response";
export import GetPdbMetricsResponse = GetPdbMetricsResponse.GetPdbMetricsResponse;
import * as GetWorkRequestResponse from "./get-work-request-response";
export import GetWorkRequestResponse = GetWorkRequestResponse.GetWorkRequestResponse;
import * as ListAssociatedDatabasesResponse from "./list-associated-databases-response";
export import ListAssociatedDatabasesResponse = ListAssociatedDatabasesResponse.ListAssociatedDatabasesResponse;
import * as ListAwrDbSnapshotsResponse from "./list-awr-db-snapshots-response";
export import ListAwrDbSnapshotsResponse = ListAwrDbSnapshotsResponse.ListAwrDbSnapshotsResponse;
import * as ListAwrDbsResponse from "./list-awr-dbs-response";
export import ListAwrDbsResponse = ListAwrDbsResponse.ListAwrDbsResponse;
import * as ListDatabaseParametersResponse from "./list-database-parameters-response";
export import ListDatabaseParametersResponse = ListDatabaseParametersResponse.ListDatabaseParametersResponse;
import * as ListDbManagementPrivateEndpointsResponse from "./list-db-management-private-endpoints-response";
export import ListDbManagementPrivateEndpointsResponse = ListDbManagementPrivateEndpointsResponse.ListDbManagementPrivateEndpointsResponse;
import * as ListJobExecutionsResponse from "./list-job-executions-response";
export import ListJobExecutionsResponse = ListJobExecutionsResponse.ListJobExecutionsResponse;
import * as ListJobRunsResponse from "./list-job-runs-response";
export import ListJobRunsResponse = ListJobRunsResponse.ListJobRunsResponse;
import * as ListJobsResponse from "./list-jobs-response";
export import ListJobsResponse = ListJobsResponse.ListJobsResponse;
import * as ListManagedDatabaseGroupsResponse from "./list-managed-database-groups-response";
export import ListManagedDatabaseGroupsResponse = ListManagedDatabaseGroupsResponse.ListManagedDatabaseGroupsResponse;
import * as ListManagedDatabasesResponse from "./list-managed-databases-response";
export import ListManagedDatabasesResponse = ListManagedDatabasesResponse.ListManagedDatabasesResponse;
import * as ListTablespacesResponse from "./list-tablespaces-response";
export import ListTablespacesResponse = ListTablespacesResponse.ListTablespacesResponse;
import * as ListWorkRequestErrorsResponse from "./list-work-request-errors-response";
export import ListWorkRequestErrorsResponse = ListWorkRequestErrorsResponse.ListWorkRequestErrorsResponse;
import * as ListWorkRequestLogsResponse from "./list-work-request-logs-response";
export import ListWorkRequestLogsResponse = ListWorkRequestLogsResponse.ListWorkRequestLogsResponse;
import * as ListWorkRequestsResponse from "./list-work-requests-response";
export import ListWorkRequestsResponse = ListWorkRequestsResponse.ListWorkRequestsResponse;
import * as RemoveManagedDatabaseFromManagedDatabaseGroupResponse from "./remove-managed-database-from-managed-database-group-response";
export import RemoveManagedDatabaseFromManagedDatabaseGroupResponse = RemoveManagedDatabaseFromManagedDatabaseGroupResponse.RemoveManagedDatabaseFromManagedDatabaseGroupResponse;
import * as ResetDatabaseParametersResponse from "./reset-database-parameters-response";
export import ResetDatabaseParametersResponse = ResetDatabaseParametersResponse.ResetDatabaseParametersResponse;
import * as SummarizeAwrDbCpuUsagesResponse from "./summarize-awr-db-cpu-usages-response";
export import SummarizeAwrDbCpuUsagesResponse = SummarizeAwrDbCpuUsagesResponse.SummarizeAwrDbCpuUsagesResponse;
import * as SummarizeAwrDbMetricsResponse from "./summarize-awr-db-metrics-response";
export import SummarizeAwrDbMetricsResponse = SummarizeAwrDbMetricsResponse.SummarizeAwrDbMetricsResponse;
import * as SummarizeAwrDbParameterChangesResponse from "./summarize-awr-db-parameter-changes-response";
export import SummarizeAwrDbParameterChangesResponse = SummarizeAwrDbParameterChangesResponse.SummarizeAwrDbParameterChangesResponse;
import * as SummarizeAwrDbParametersResponse from "./summarize-awr-db-parameters-response";
export import SummarizeAwrDbParametersResponse = SummarizeAwrDbParametersResponse.SummarizeAwrDbParametersResponse;
import * as SummarizeAwrDbSnapshotRangesResponse from "./summarize-awr-db-snapshot-ranges-response";
export import SummarizeAwrDbSnapshotRangesResponse = SummarizeAwrDbSnapshotRangesResponse.SummarizeAwrDbSnapshotRangesResponse;
import * as SummarizeAwrDbSysstatsResponse from "./summarize-awr-db-sysstats-response";
export import SummarizeAwrDbSysstatsResponse = SummarizeAwrDbSysstatsResponse.SummarizeAwrDbSysstatsResponse;
import * as SummarizeAwrDbTopWaitEventsResponse from "./summarize-awr-db-top-wait-events-response";
export import SummarizeAwrDbTopWaitEventsResponse = SummarizeAwrDbTopWaitEventsResponse.SummarizeAwrDbTopWaitEventsResponse;
import * as SummarizeAwrDbWaitEventBucketsResponse from "./summarize-awr-db-wait-event-buckets-response";
export import SummarizeAwrDbWaitEventBucketsResponse = SummarizeAwrDbWaitEventBucketsResponse.SummarizeAwrDbWaitEventBucketsResponse;
import * as SummarizeAwrDbWaitEventsResponse from "./summarize-awr-db-wait-events-response";
export import SummarizeAwrDbWaitEventsResponse = SummarizeAwrDbWaitEventsResponse.SummarizeAwrDbWaitEventsResponse;
import * as SummarizeJobExecutionsStatusesResponse from "./summarize-job-executions-statuses-response";
export import SummarizeJobExecutionsStatusesResponse = SummarizeJobExecutionsStatusesResponse.SummarizeJobExecutionsStatusesResponse;
import * as UpdateDbManagementPrivateEndpointResponse from "./update-db-management-private-endpoint-response";
export import UpdateDbManagementPrivateEndpointResponse = UpdateDbManagementPrivateEndpointResponse.UpdateDbManagementPrivateEndpointResponse;
import * as UpdateJobResponse from "./update-job-response";
export import UpdateJobResponse = UpdateJobResponse.UpdateJobResponse;
import * as UpdateManagedDatabaseGroupResponse from "./update-managed-database-group-response";
export import UpdateManagedDatabaseGroupResponse = UpdateManagedDatabaseGroupResponse.UpdateManagedDatabaseGroupResponse;
