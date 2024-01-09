/**
 * Application Dependency Management API
 * Use the Application Dependency Management API to create knowledge bases and vulnerability audits.  For more information, see [ADM](/Content/application-dependency-management/home.htm).
 * OpenAPI spec version: 20220421
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActivateRemediationRecipeRequest from "./activate-remediation-recipe-request";
export import ActivateRemediationRecipeRequest = ActivateRemediationRecipeRequest.ActivateRemediationRecipeRequest;
import * as CancelRemediationRunRequest from "./cancel-remediation-run-request";
export import CancelRemediationRunRequest = CancelRemediationRunRequest.CancelRemediationRunRequest;
import * as CancelWorkRequestRequest from "./cancel-work-request-request";
export import CancelWorkRequestRequest = CancelWorkRequestRequest.CancelWorkRequestRequest;
import * as ChangeKnowledgeBaseCompartmentRequest from "./change-knowledge-base-compartment-request";
export import ChangeKnowledgeBaseCompartmentRequest = ChangeKnowledgeBaseCompartmentRequest.ChangeKnowledgeBaseCompartmentRequest;
import * as ChangeRemediationRecipeCompartmentRequest from "./change-remediation-recipe-compartment-request";
export import ChangeRemediationRecipeCompartmentRequest = ChangeRemediationRecipeCompartmentRequest.ChangeRemediationRecipeCompartmentRequest;
import * as ChangeRemediationRunCompartmentRequest from "./change-remediation-run-compartment-request";
export import ChangeRemediationRunCompartmentRequest = ChangeRemediationRunCompartmentRequest.ChangeRemediationRunCompartmentRequest;
import * as ChangeVulnerabilityAuditCompartmentRequest from "./change-vulnerability-audit-compartment-request";
export import ChangeVulnerabilityAuditCompartmentRequest = ChangeVulnerabilityAuditCompartmentRequest.ChangeVulnerabilityAuditCompartmentRequest;
import * as CreateKnowledgeBaseRequest from "./create-knowledge-base-request";
export import CreateKnowledgeBaseRequest = CreateKnowledgeBaseRequest.CreateKnowledgeBaseRequest;
import * as CreateRemediationRecipeRequest from "./create-remediation-recipe-request";
export import CreateRemediationRecipeRequest = CreateRemediationRecipeRequest.CreateRemediationRecipeRequest;
import * as CreateRemediationRunRequest from "./create-remediation-run-request";
export import CreateRemediationRunRequest = CreateRemediationRunRequest.CreateRemediationRunRequest;
import * as CreateVulnerabilityAuditRequest from "./create-vulnerability-audit-request";
export import CreateVulnerabilityAuditRequest = CreateVulnerabilityAuditRequest.CreateVulnerabilityAuditRequest;
import * as DeactivateRemediationRecipeRequest from "./deactivate-remediation-recipe-request";
export import DeactivateRemediationRecipeRequest = DeactivateRemediationRecipeRequest.DeactivateRemediationRecipeRequest;
import * as DeleteKnowledgeBaseRequest from "./delete-knowledge-base-request";
export import DeleteKnowledgeBaseRequest = DeleteKnowledgeBaseRequest.DeleteKnowledgeBaseRequest;
import * as DeleteRemediationRecipeRequest from "./delete-remediation-recipe-request";
export import DeleteRemediationRecipeRequest = DeleteRemediationRecipeRequest.DeleteRemediationRecipeRequest;
import * as DeleteRemediationRunRequest from "./delete-remediation-run-request";
export import DeleteRemediationRunRequest = DeleteRemediationRunRequest.DeleteRemediationRunRequest;
import * as DeleteVulnerabilityAuditRequest from "./delete-vulnerability-audit-request";
export import DeleteVulnerabilityAuditRequest = DeleteVulnerabilityAuditRequest.DeleteVulnerabilityAuditRequest;
import * as GetKnowledgeBaseRequest from "./get-knowledge-base-request";
export import GetKnowledgeBaseRequest = GetKnowledgeBaseRequest.GetKnowledgeBaseRequest;
import * as GetRemediationRecipeRequest from "./get-remediation-recipe-request";
export import GetRemediationRecipeRequest = GetRemediationRecipeRequest.GetRemediationRecipeRequest;
import * as GetRemediationRunRequest from "./get-remediation-run-request";
export import GetRemediationRunRequest = GetRemediationRunRequest.GetRemediationRunRequest;
import * as GetStageRequest from "./get-stage-request";
export import GetStageRequest = GetStageRequest.GetStageRequest;
import * as GetVulnerabilityAuditRequest from "./get-vulnerability-audit-request";
export import GetVulnerabilityAuditRequest = GetVulnerabilityAuditRequest.GetVulnerabilityAuditRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListApplicationDependencyRecommendationsRequest from "./list-application-dependency-recommendations-request";
export import ListApplicationDependencyRecommendationsRequest = ListApplicationDependencyRecommendationsRequest.ListApplicationDependencyRecommendationsRequest;
import * as ListApplicationDependencyVulnerabilitiesRequest from "./list-application-dependency-vulnerabilities-request";
export import ListApplicationDependencyVulnerabilitiesRequest = ListApplicationDependencyVulnerabilitiesRequest.ListApplicationDependencyVulnerabilitiesRequest;
import * as ListKnowledgeBasesRequest from "./list-knowledge-bases-request";
export import ListKnowledgeBasesRequest = ListKnowledgeBasesRequest.ListKnowledgeBasesRequest;
import * as ListRemediationRecipesRequest from "./list-remediation-recipes-request";
export import ListRemediationRecipesRequest = ListRemediationRecipesRequest.ListRemediationRecipesRequest;
import * as ListRemediationRunsRequest from "./list-remediation-runs-request";
export import ListRemediationRunsRequest = ListRemediationRunsRequest.ListRemediationRunsRequest;
import * as ListStagesRequest from "./list-stages-request";
export import ListStagesRequest = ListStagesRequest.ListStagesRequest;
import * as ListVulnerabilityAuditsRequest from "./list-vulnerability-audits-request";
export import ListVulnerabilityAuditsRequest = ListVulnerabilityAuditsRequest.ListVulnerabilityAuditsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as UpdateKnowledgeBaseRequest from "./update-knowledge-base-request";
export import UpdateKnowledgeBaseRequest = UpdateKnowledgeBaseRequest.UpdateKnowledgeBaseRequest;
import * as UpdateRemediationRecipeRequest from "./update-remediation-recipe-request";
export import UpdateRemediationRecipeRequest = UpdateRemediationRecipeRequest.UpdateRemediationRecipeRequest;
import * as UpdateRemediationRunRequest from "./update-remediation-run-request";
export import UpdateRemediationRunRequest = UpdateRemediationRunRequest.UpdateRemediationRunRequest;
import * as UpdateVulnerabilityAuditRequest from "./update-vulnerability-audit-request";
export import UpdateVulnerabilityAuditRequest = UpdateVulnerabilityAuditRequest.UpdateVulnerabilityAuditRequest;
