/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AddEntityAssociationRequest from "./add-entity-association-request";
export import AddEntityAssociationRequest = AddEntityAssociationRequest.AddEntityAssociationRequest;
import * as AddSourceEventTypesRequest from "./add-source-event-types-request";
export import AddSourceEventTypesRequest = AddSourceEventTypesRequest.AddSourceEventTypesRequest;
import * as AppendLookupDataRequest from "./append-lookup-data-request";
export import AppendLookupDataRequest = AppendLookupDataRequest.AppendLookupDataRequest;
import * as BatchGetBasicInfoRequest from "./batch-get-basic-info-request";
export import BatchGetBasicInfoRequest = BatchGetBasicInfoRequest.BatchGetBasicInfoRequest;
import * as CancelQueryWorkRequestRequest from "./cancel-query-work-request-request";
export import CancelQueryWorkRequestRequest = CancelQueryWorkRequestRequest.CancelQueryWorkRequestRequest;
import * as ChangeLogAnalyticsEmBridgeCompartmentRequest from "./change-log-analytics-em-bridge-compartment-request";
export import ChangeLogAnalyticsEmBridgeCompartmentRequest = ChangeLogAnalyticsEmBridgeCompartmentRequest.ChangeLogAnalyticsEmBridgeCompartmentRequest;
import * as ChangeLogAnalyticsEntityCompartmentRequest from "./change-log-analytics-entity-compartment-request";
export import ChangeLogAnalyticsEntityCompartmentRequest = ChangeLogAnalyticsEntityCompartmentRequest.ChangeLogAnalyticsEntityCompartmentRequest;
import * as ChangeLogAnalyticsLogGroupCompartmentRequest from "./change-log-analytics-log-group-compartment-request";
export import ChangeLogAnalyticsLogGroupCompartmentRequest = ChangeLogAnalyticsLogGroupCompartmentRequest.ChangeLogAnalyticsLogGroupCompartmentRequest;
import * as ChangeLogAnalyticsObjectCollectionRuleCompartmentRequest from "./change-log-analytics-object-collection-rule-compartment-request";
export import ChangeLogAnalyticsObjectCollectionRuleCompartmentRequest = ChangeLogAnalyticsObjectCollectionRuleCompartmentRequest.ChangeLogAnalyticsObjectCollectionRuleCompartmentRequest;
import * as ChangeScheduledTaskCompartmentRequest from "./change-scheduled-task-compartment-request";
export import ChangeScheduledTaskCompartmentRequest = ChangeScheduledTaskCompartmentRequest.ChangeScheduledTaskCompartmentRequest;
import * as CleanRequest from "./clean-request";
export import CleanRequest = CleanRequest.CleanRequest;
import * as CreateLogAnalyticsEmBridgeRequest from "./create-log-analytics-em-bridge-request";
export import CreateLogAnalyticsEmBridgeRequest = CreateLogAnalyticsEmBridgeRequest.CreateLogAnalyticsEmBridgeRequest;
import * as CreateLogAnalyticsEntityRequest from "./create-log-analytics-entity-request";
export import CreateLogAnalyticsEntityRequest = CreateLogAnalyticsEntityRequest.CreateLogAnalyticsEntityRequest;
import * as CreateLogAnalyticsEntityTypeRequest from "./create-log-analytics-entity-type-request";
export import CreateLogAnalyticsEntityTypeRequest = CreateLogAnalyticsEntityTypeRequest.CreateLogAnalyticsEntityTypeRequest;
import * as CreateLogAnalyticsLogGroupRequest from "./create-log-analytics-log-group-request";
export import CreateLogAnalyticsLogGroupRequest = CreateLogAnalyticsLogGroupRequest.CreateLogAnalyticsLogGroupRequest;
import * as CreateLogAnalyticsObjectCollectionRuleRequest from "./create-log-analytics-object-collection-rule-request";
export import CreateLogAnalyticsObjectCollectionRuleRequest = CreateLogAnalyticsObjectCollectionRuleRequest.CreateLogAnalyticsObjectCollectionRuleRequest;
import * as CreateScheduledTaskRequest from "./create-scheduled-task-request";
export import CreateScheduledTaskRequest = CreateScheduledTaskRequest.CreateScheduledTaskRequest;
import * as DeleteAssociationsRequest from "./delete-associations-request";
export import DeleteAssociationsRequest = DeleteAssociationsRequest.DeleteAssociationsRequest;
import * as DeleteFieldRequest from "./delete-field-request";
export import DeleteFieldRequest = DeleteFieldRequest.DeleteFieldRequest;
import * as DeleteLabelRequest from "./delete-label-request";
export import DeleteLabelRequest = DeleteLabelRequest.DeleteLabelRequest;
import * as DeleteLogAnalyticsEmBridgeRequest from "./delete-log-analytics-em-bridge-request";
export import DeleteLogAnalyticsEmBridgeRequest = DeleteLogAnalyticsEmBridgeRequest.DeleteLogAnalyticsEmBridgeRequest;
import * as DeleteLogAnalyticsEntityRequest from "./delete-log-analytics-entity-request";
export import DeleteLogAnalyticsEntityRequest = DeleteLogAnalyticsEntityRequest.DeleteLogAnalyticsEntityRequest;
import * as DeleteLogAnalyticsEntityTypeRequest from "./delete-log-analytics-entity-type-request";
export import DeleteLogAnalyticsEntityTypeRequest = DeleteLogAnalyticsEntityTypeRequest.DeleteLogAnalyticsEntityTypeRequest;
import * as DeleteLogAnalyticsLogGroupRequest from "./delete-log-analytics-log-group-request";
export import DeleteLogAnalyticsLogGroupRequest = DeleteLogAnalyticsLogGroupRequest.DeleteLogAnalyticsLogGroupRequest;
import * as DeleteLogAnalyticsObjectCollectionRuleRequest from "./delete-log-analytics-object-collection-rule-request";
export import DeleteLogAnalyticsObjectCollectionRuleRequest = DeleteLogAnalyticsObjectCollectionRuleRequest.DeleteLogAnalyticsObjectCollectionRuleRequest;
import * as DeleteLookupRequest from "./delete-lookup-request";
export import DeleteLookupRequest = DeleteLookupRequest.DeleteLookupRequest;
import * as DeleteParserRequest from "./delete-parser-request";
export import DeleteParserRequest = DeleteParserRequest.DeleteParserRequest;
import * as DeleteScheduledTaskRequest from "./delete-scheduled-task-request";
export import DeleteScheduledTaskRequest = DeleteScheduledTaskRequest.DeleteScheduledTaskRequest;
import * as DeleteSourceRequest from "./delete-source-request";
export import DeleteSourceRequest = DeleteSourceRequest.DeleteSourceRequest;
import * as DeleteUploadRequest from "./delete-upload-request";
export import DeleteUploadRequest = DeleteUploadRequest.DeleteUploadRequest;
import * as DeleteUploadFileRequest from "./delete-upload-file-request";
export import DeleteUploadFileRequest = DeleteUploadFileRequest.DeleteUploadFileRequest;
import * as DeleteUploadWarningRequest from "./delete-upload-warning-request";
export import DeleteUploadWarningRequest = DeleteUploadWarningRequest.DeleteUploadWarningRequest;
import * as DisableArchivingRequest from "./disable-archiving-request";
export import DisableArchivingRequest = DisableArchivingRequest.DisableArchivingRequest;
import * as DisableAutoAssociationRequest from "./disable-auto-association-request";
export import DisableAutoAssociationRequest = DisableAutoAssociationRequest.DisableAutoAssociationRequest;
import * as DisableSourceEventTypesRequest from "./disable-source-event-types-request";
export import DisableSourceEventTypesRequest = DisableSourceEventTypesRequest.DisableSourceEventTypesRequest;
import * as EnableArchivingRequest from "./enable-archiving-request";
export import EnableArchivingRequest = EnableArchivingRequest.EnableArchivingRequest;
import * as EnableAutoAssociationRequest from "./enable-auto-association-request";
export import EnableAutoAssociationRequest = EnableAutoAssociationRequest.EnableAutoAssociationRequest;
import * as EnableSourceEventTypesRequest from "./enable-source-event-types-request";
export import EnableSourceEventTypesRequest = EnableSourceEventTypesRequest.EnableSourceEventTypesRequest;
import * as EstimatePurgeDataSizeRequest from "./estimate-purge-data-size-request";
export import EstimatePurgeDataSizeRequest = EstimatePurgeDataSizeRequest.EstimatePurgeDataSizeRequest;
import * as EstimateRecallDataSizeRequest from "./estimate-recall-data-size-request";
export import EstimateRecallDataSizeRequest = EstimateRecallDataSizeRequest.EstimateRecallDataSizeRequest;
import * as EstimateReleaseDataSizeRequest from "./estimate-release-data-size-request";
export import EstimateReleaseDataSizeRequest = EstimateReleaseDataSizeRequest.EstimateReleaseDataSizeRequest;
import * as ExportCustomContentRequest from "./export-custom-content-request";
export import ExportCustomContentRequest = ExportCustomContentRequest.ExportCustomContentRequest;
import * as ExportQueryResultRequest from "./export-query-result-request";
export import ExportQueryResultRequest = ExportQueryResultRequest.ExportQueryResultRequest;
import * as ExtractStructuredLogFieldPathsRequest from "./extract-structured-log-field-paths-request";
export import ExtractStructuredLogFieldPathsRequest = ExtractStructuredLogFieldPathsRequest.ExtractStructuredLogFieldPathsRequest;
import * as ExtractStructuredLogHeaderPathsRequest from "./extract-structured-log-header-paths-request";
export import ExtractStructuredLogHeaderPathsRequest = ExtractStructuredLogHeaderPathsRequest.ExtractStructuredLogHeaderPathsRequest;
import * as FilterRequest from "./filter-request";
export import FilterRequest = FilterRequest.FilterRequest;
import * as GetAssociationSummaryRequest from "./get-association-summary-request";
export import GetAssociationSummaryRequest = GetAssociationSummaryRequest.GetAssociationSummaryRequest;
import * as GetColumnNamesRequest from "./get-column-names-request";
export import GetColumnNamesRequest = GetColumnNamesRequest.GetColumnNamesRequest;
import * as GetConfigWorkRequestRequest from "./get-config-work-request-request";
export import GetConfigWorkRequestRequest = GetConfigWorkRequestRequest.GetConfigWorkRequestRequest;
import * as GetFieldRequest from "./get-field-request";
export import GetFieldRequest = GetFieldRequest.GetFieldRequest;
import * as GetFieldsSummaryRequest from "./get-fields-summary-request";
export import GetFieldsSummaryRequest = GetFieldsSummaryRequest.GetFieldsSummaryRequest;
import * as GetLabelRequest from "./get-label-request";
export import GetLabelRequest = GetLabelRequest.GetLabelRequest;
import * as GetLabelSummaryRequest from "./get-label-summary-request";
export import GetLabelSummaryRequest = GetLabelSummaryRequest.GetLabelSummaryRequest;
import * as GetLogAnalyticsEmBridgeRequest from "./get-log-analytics-em-bridge-request";
export import GetLogAnalyticsEmBridgeRequest = GetLogAnalyticsEmBridgeRequest.GetLogAnalyticsEmBridgeRequest;
import * as GetLogAnalyticsEmBridgeSummaryRequest from "./get-log-analytics-em-bridge-summary-request";
export import GetLogAnalyticsEmBridgeSummaryRequest = GetLogAnalyticsEmBridgeSummaryRequest.GetLogAnalyticsEmBridgeSummaryRequest;
import * as GetLogAnalyticsEntitiesSummaryRequest from "./get-log-analytics-entities-summary-request";
export import GetLogAnalyticsEntitiesSummaryRequest = GetLogAnalyticsEntitiesSummaryRequest.GetLogAnalyticsEntitiesSummaryRequest;
import * as GetLogAnalyticsEntityRequest from "./get-log-analytics-entity-request";
export import GetLogAnalyticsEntityRequest = GetLogAnalyticsEntityRequest.GetLogAnalyticsEntityRequest;
import * as GetLogAnalyticsEntityTypeRequest from "./get-log-analytics-entity-type-request";
export import GetLogAnalyticsEntityTypeRequest = GetLogAnalyticsEntityTypeRequest.GetLogAnalyticsEntityTypeRequest;
import * as GetLogAnalyticsLogGroupRequest from "./get-log-analytics-log-group-request";
export import GetLogAnalyticsLogGroupRequest = GetLogAnalyticsLogGroupRequest.GetLogAnalyticsLogGroupRequest;
import * as GetLogAnalyticsLogGroupsSummaryRequest from "./get-log-analytics-log-groups-summary-request";
export import GetLogAnalyticsLogGroupsSummaryRequest = GetLogAnalyticsLogGroupsSummaryRequest.GetLogAnalyticsLogGroupsSummaryRequest;
import * as GetLogAnalyticsObjectCollectionRuleRequest from "./get-log-analytics-object-collection-rule-request";
export import GetLogAnalyticsObjectCollectionRuleRequest = GetLogAnalyticsObjectCollectionRuleRequest.GetLogAnalyticsObjectCollectionRuleRequest;
import * as GetLookupRequest from "./get-lookup-request";
export import GetLookupRequest = GetLookupRequest.GetLookupRequest;
import * as GetLookupSummaryRequest from "./get-lookup-summary-request";
export import GetLookupSummaryRequest = GetLookupSummaryRequest.GetLookupSummaryRequest;
import * as GetNamespaceRequest from "./get-namespace-request";
export import GetNamespaceRequest = GetNamespaceRequest.GetNamespaceRequest;
import * as GetParserRequest from "./get-parser-request";
export import GetParserRequest = GetParserRequest.GetParserRequest;
import * as GetParserSummaryRequest from "./get-parser-summary-request";
export import GetParserSummaryRequest = GetParserSummaryRequest.GetParserSummaryRequest;
import * as GetQueryResultRequest from "./get-query-result-request";
export import GetQueryResultRequest = GetQueryResultRequest.GetQueryResultRequest;
import * as GetQueryWorkRequestRequest from "./get-query-work-request-request";
export import GetQueryWorkRequestRequest = GetQueryWorkRequestRequest.GetQueryWorkRequestRequest;
import * as GetScheduledTaskRequest from "./get-scheduled-task-request";
export import GetScheduledTaskRequest = GetScheduledTaskRequest.GetScheduledTaskRequest;
import * as GetSourceRequest from "./get-source-request";
export import GetSourceRequest = GetSourceRequest.GetSourceRequest;
import * as GetSourceSummaryRequest from "./get-source-summary-request";
export import GetSourceSummaryRequest = GetSourceSummaryRequest.GetSourceSummaryRequest;
import * as GetStorageRequest from "./get-storage-request";
export import GetStorageRequest = GetStorageRequest.GetStorageRequest;
import * as GetStorageUsageRequest from "./get-storage-usage-request";
export import GetStorageUsageRequest = GetStorageUsageRequest.GetStorageUsageRequest;
import * as GetStorageWorkRequestRequest from "./get-storage-work-request-request";
export import GetStorageWorkRequestRequest = GetStorageWorkRequestRequest.GetStorageWorkRequestRequest;
import * as GetUploadRequest from "./get-upload-request";
export import GetUploadRequest = GetUploadRequest.GetUploadRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ImportCustomContentRequest from "./import-custom-content-request";
export import ImportCustomContentRequest = ImportCustomContentRequest.ImportCustomContentRequest;
import * as ListAssociableEntitiesRequest from "./list-associable-entities-request";
export import ListAssociableEntitiesRequest = ListAssociableEntitiesRequest.ListAssociableEntitiesRequest;
import * as ListAssociatedEntitiesRequest from "./list-associated-entities-request";
export import ListAssociatedEntitiesRequest = ListAssociatedEntitiesRequest.ListAssociatedEntitiesRequest;
import * as ListAutoAssociationsRequest from "./list-auto-associations-request";
export import ListAutoAssociationsRequest = ListAutoAssociationsRequest.ListAutoAssociationsRequest;
import * as ListConfigWorkRequestsRequest from "./list-config-work-requests-request";
export import ListConfigWorkRequestsRequest = ListConfigWorkRequestsRequest.ListConfigWorkRequestsRequest;
import * as ListEntityAssociationsRequest from "./list-entity-associations-request";
export import ListEntityAssociationsRequest = ListEntityAssociationsRequest.ListEntityAssociationsRequest;
import * as ListEntitySourceAssociationsRequest from "./list-entity-source-associations-request";
export import ListEntitySourceAssociationsRequest = ListEntitySourceAssociationsRequest.ListEntitySourceAssociationsRequest;
import * as ListFieldsRequest from "./list-fields-request";
export import ListFieldsRequest = ListFieldsRequest.ListFieldsRequest;
import * as ListLabelPrioritiesRequest from "./list-label-priorities-request";
export import ListLabelPrioritiesRequest = ListLabelPrioritiesRequest.ListLabelPrioritiesRequest;
import * as ListLabelSourceDetailsRequest from "./list-label-source-details-request";
export import ListLabelSourceDetailsRequest = ListLabelSourceDetailsRequest.ListLabelSourceDetailsRequest;
import * as ListLabelsRequest from "./list-labels-request";
export import ListLabelsRequest = ListLabelsRequest.ListLabelsRequest;
import * as ListLogAnalyticsEmBridgesRequest from "./list-log-analytics-em-bridges-request";
export import ListLogAnalyticsEmBridgesRequest = ListLogAnalyticsEmBridgesRequest.ListLogAnalyticsEmBridgesRequest;
import * as ListLogAnalyticsEntitiesRequest from "./list-log-analytics-entities-request";
export import ListLogAnalyticsEntitiesRequest = ListLogAnalyticsEntitiesRequest.ListLogAnalyticsEntitiesRequest;
import * as ListLogAnalyticsEntityTypesRequest from "./list-log-analytics-entity-types-request";
export import ListLogAnalyticsEntityTypesRequest = ListLogAnalyticsEntityTypesRequest.ListLogAnalyticsEntityTypesRequest;
import * as ListLogAnalyticsLogGroupsRequest from "./list-log-analytics-log-groups-request";
export import ListLogAnalyticsLogGroupsRequest = ListLogAnalyticsLogGroupsRequest.ListLogAnalyticsLogGroupsRequest;
import * as ListLogAnalyticsObjectCollectionRulesRequest from "./list-log-analytics-object-collection-rules-request";
export import ListLogAnalyticsObjectCollectionRulesRequest = ListLogAnalyticsObjectCollectionRulesRequest.ListLogAnalyticsObjectCollectionRulesRequest;
import * as ListLogSetsRequest from "./list-log-sets-request";
export import ListLogSetsRequest = ListLogSetsRequest.ListLogSetsRequest;
import * as ListLookupsRequest from "./list-lookups-request";
export import ListLookupsRequest = ListLookupsRequest.ListLookupsRequest;
import * as ListMetaSourceTypesRequest from "./list-meta-source-types-request";
export import ListMetaSourceTypesRequest = ListMetaSourceTypesRequest.ListMetaSourceTypesRequest;
import * as ListNamespacesRequest from "./list-namespaces-request";
export import ListNamespacesRequest = ListNamespacesRequest.ListNamespacesRequest;
import * as ListParserFunctionsRequest from "./list-parser-functions-request";
export import ListParserFunctionsRequest = ListParserFunctionsRequest.ListParserFunctionsRequest;
import * as ListParserMetaPluginsRequest from "./list-parser-meta-plugins-request";
export import ListParserMetaPluginsRequest = ListParserMetaPluginsRequest.ListParserMetaPluginsRequest;
import * as ListParsersRequest from "./list-parsers-request";
export import ListParsersRequest = ListParsersRequest.ListParsersRequest;
import * as ListQueryWorkRequestsRequest from "./list-query-work-requests-request";
export import ListQueryWorkRequestsRequest = ListQueryWorkRequestsRequest.ListQueryWorkRequestsRequest;
import * as ListRecalledDataRequest from "./list-recalled-data-request";
export import ListRecalledDataRequest = ListRecalledDataRequest.ListRecalledDataRequest;
import * as ListScheduledTasksRequest from "./list-scheduled-tasks-request";
export import ListScheduledTasksRequest = ListScheduledTasksRequest.ListScheduledTasksRequest;
import * as ListSourceAssociationsRequest from "./list-source-associations-request";
export import ListSourceAssociationsRequest = ListSourceAssociationsRequest.ListSourceAssociationsRequest;
import * as ListSourceEventTypesRequest from "./list-source-event-types-request";
export import ListSourceEventTypesRequest = ListSourceEventTypesRequest.ListSourceEventTypesRequest;
import * as ListSourceExtendedFieldDefinitionsRequest from "./list-source-extended-field-definitions-request";
export import ListSourceExtendedFieldDefinitionsRequest = ListSourceExtendedFieldDefinitionsRequest.ListSourceExtendedFieldDefinitionsRequest;
import * as ListSourceLabelOperatorsRequest from "./list-source-label-operators-request";
export import ListSourceLabelOperatorsRequest = ListSourceLabelOperatorsRequest.ListSourceLabelOperatorsRequest;
import * as ListSourceMetaFunctionsRequest from "./list-source-meta-functions-request";
export import ListSourceMetaFunctionsRequest = ListSourceMetaFunctionsRequest.ListSourceMetaFunctionsRequest;
import * as ListSourcePatternsRequest from "./list-source-patterns-request";
export import ListSourcePatternsRequest = ListSourcePatternsRequest.ListSourcePatternsRequest;
import * as ListSourcesRequest from "./list-sources-request";
export import ListSourcesRequest = ListSourcesRequest.ListSourcesRequest;
import * as ListStorageWorkRequestErrorsRequest from "./list-storage-work-request-errors-request";
export import ListStorageWorkRequestErrorsRequest = ListStorageWorkRequestErrorsRequest.ListStorageWorkRequestErrorsRequest;
import * as ListStorageWorkRequestsRequest from "./list-storage-work-requests-request";
export import ListStorageWorkRequestsRequest = ListStorageWorkRequestsRequest.ListStorageWorkRequestsRequest;
import * as ListSupportedCharEncodingsRequest from "./list-supported-char-encodings-request";
export import ListSupportedCharEncodingsRequest = ListSupportedCharEncodingsRequest.ListSupportedCharEncodingsRequest;
import * as ListSupportedTimezonesRequest from "./list-supported-timezones-request";
export import ListSupportedTimezonesRequest = ListSupportedTimezonesRequest.ListSupportedTimezonesRequest;
import * as ListUploadFilesRequest from "./list-upload-files-request";
export import ListUploadFilesRequest = ListUploadFilesRequest.ListUploadFilesRequest;
import * as ListUploadWarningsRequest from "./list-upload-warnings-request";
export import ListUploadWarningsRequest = ListUploadWarningsRequest.ListUploadWarningsRequest;
import * as ListUploadsRequest from "./list-uploads-request";
export import ListUploadsRequest = ListUploadsRequest.ListUploadsRequest;
import * as ListWarningsRequest from "./list-warnings-request";
export import ListWarningsRequest = ListWarningsRequest.ListWarningsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as OffboardNamespaceRequest from "./offboard-namespace-request";
export import OffboardNamespaceRequest = OffboardNamespaceRequest.OffboardNamespaceRequest;
import * as OnboardNamespaceRequest from "./onboard-namespace-request";
export import OnboardNamespaceRequest = OnboardNamespaceRequest.OnboardNamespaceRequest;
import * as ParseQueryRequest from "./parse-query-request";
export import ParseQueryRequest = ParseQueryRequest.ParseQueryRequest;
import * as PauseScheduledTaskRequest from "./pause-scheduled-task-request";
export import PauseScheduledTaskRequest = PauseScheduledTaskRequest.PauseScheduledTaskRequest;
import * as PurgeStorageDataRequest from "./purge-storage-data-request";
export import PurgeStorageDataRequest = PurgeStorageDataRequest.PurgeStorageDataRequest;
import * as PutQueryWorkRequestBackgroundRequest from "./put-query-work-request-background-request";
export import PutQueryWorkRequestBackgroundRequest = PutQueryWorkRequestBackgroundRequest.PutQueryWorkRequestBackgroundRequest;
import * as QueryRequest from "./query-request";
export import QueryRequest = QueryRequest.QueryRequest;
import * as RecallArchivedDataRequest from "./recall-archived-data-request";
export import RecallArchivedDataRequest = RecallArchivedDataRequest.RecallArchivedDataRequest;
import * as RegisterLookupRequest from "./register-lookup-request";
export import RegisterLookupRequest = RegisterLookupRequest.RegisterLookupRequest;
import * as ReleaseRecalledDataRequest from "./release-recalled-data-request";
export import ReleaseRecalledDataRequest = ReleaseRecalledDataRequest.ReleaseRecalledDataRequest;
import * as RemoveEntityAssociationsRequest from "./remove-entity-associations-request";
export import RemoveEntityAssociationsRequest = RemoveEntityAssociationsRequest.RemoveEntityAssociationsRequest;
import * as RemoveSourceEventTypesRequest from "./remove-source-event-types-request";
export import RemoveSourceEventTypesRequest = RemoveSourceEventTypesRequest.RemoveSourceEventTypesRequest;
import * as ResumeScheduledTaskRequest from "./resume-scheduled-task-request";
export import ResumeScheduledTaskRequest = ResumeScheduledTaskRequest.ResumeScheduledTaskRequest;
import * as RunRequest from "./run-request";
export import RunRequest = RunRequest.RunRequest;
import * as SuggestRequest from "./suggest-request";
export import SuggestRequest = SuggestRequest.SuggestRequest;
import * as SuppressWarningRequest from "./suppress-warning-request";
export import SuppressWarningRequest = SuppressWarningRequest.SuppressWarningRequest;
import * as TestParserRequest from "./test-parser-request";
export import TestParserRequest = TestParserRequest.TestParserRequest;
import * as UnsuppressWarningRequest from "./unsuppress-warning-request";
export import UnsuppressWarningRequest = UnsuppressWarningRequest.UnsuppressWarningRequest;
import * as UpdateLogAnalyticsEmBridgeRequest from "./update-log-analytics-em-bridge-request";
export import UpdateLogAnalyticsEmBridgeRequest = UpdateLogAnalyticsEmBridgeRequest.UpdateLogAnalyticsEmBridgeRequest;
import * as UpdateLogAnalyticsEntityRequest from "./update-log-analytics-entity-request";
export import UpdateLogAnalyticsEntityRequest = UpdateLogAnalyticsEntityRequest.UpdateLogAnalyticsEntityRequest;
import * as UpdateLogAnalyticsEntityTypeRequest from "./update-log-analytics-entity-type-request";
export import UpdateLogAnalyticsEntityTypeRequest = UpdateLogAnalyticsEntityTypeRequest.UpdateLogAnalyticsEntityTypeRequest;
import * as UpdateLogAnalyticsLogGroupRequest from "./update-log-analytics-log-group-request";
export import UpdateLogAnalyticsLogGroupRequest = UpdateLogAnalyticsLogGroupRequest.UpdateLogAnalyticsLogGroupRequest;
import * as UpdateLogAnalyticsObjectCollectionRuleRequest from "./update-log-analytics-object-collection-rule-request";
export import UpdateLogAnalyticsObjectCollectionRuleRequest = UpdateLogAnalyticsObjectCollectionRuleRequest.UpdateLogAnalyticsObjectCollectionRuleRequest;
import * as UpdateLookupRequest from "./update-lookup-request";
export import UpdateLookupRequest = UpdateLookupRequest.UpdateLookupRequest;
import * as UpdateLookupDataRequest from "./update-lookup-data-request";
export import UpdateLookupDataRequest = UpdateLookupDataRequest.UpdateLookupDataRequest;
import * as UpdateScheduledTaskRequest from "./update-scheduled-task-request";
export import UpdateScheduledTaskRequest = UpdateScheduledTaskRequest.UpdateScheduledTaskRequest;
import * as UpdateStorageRequest from "./update-storage-request";
export import UpdateStorageRequest = UpdateStorageRequest.UpdateStorageRequest;
import * as UploadLogEventsFileRequest from "./upload-log-events-file-request";
export import UploadLogEventsFileRequest = UploadLogEventsFileRequest.UploadLogEventsFileRequest;
import * as UploadLogFileRequest from "./upload-log-file-request";
export import UploadLogFileRequest = UploadLogFileRequest.UploadLogFileRequest;
import * as UpsertAssociationsRequest from "./upsert-associations-request";
export import UpsertAssociationsRequest = UpsertAssociationsRequest.UpsertAssociationsRequest;
import * as UpsertFieldRequest from "./upsert-field-request";
export import UpsertFieldRequest = UpsertFieldRequest.UpsertFieldRequest;
import * as UpsertLabelRequest from "./upsert-label-request";
export import UpsertLabelRequest = UpsertLabelRequest.UpsertLabelRequest;
import * as UpsertParserRequest from "./upsert-parser-request";
export import UpsertParserRequest = UpsertParserRequest.UpsertParserRequest;
import * as UpsertSourceRequest from "./upsert-source-request";
export import UpsertSourceRequest = UpsertSourceRequest.UpsertSourceRequest;
import * as ValidateAssociationParametersRequest from "./validate-association-parameters-request";
export import ValidateAssociationParametersRequest = ValidateAssociationParametersRequest.ValidateAssociationParametersRequest;
import * as ValidateFileRequest from "./validate-file-request";
export import ValidateFileRequest = ValidateFileRequest.ValidateFileRequest;
import * as ValidateSourceRequest from "./validate-source-request";
export import ValidateSourceRequest = ValidateSourceRequest.ValidateSourceRequest;
import * as ValidateSourceExtendedFieldDetailsRequest from "./validate-source-extended-field-details-request";
export import ValidateSourceExtendedFieldDetailsRequest = ValidateSourceExtendedFieldDetailsRequest.ValidateSourceExtendedFieldDetailsRequest;
import * as ValidateSourceMappingRequest from "./validate-source-mapping-request";
export import ValidateSourceMappingRequest = ValidateSourceMappingRequest.ValidateSourceMappingRequest;
