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

import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as ApplicationDependency from "./application-dependency";
export import ApplicationDependency = ApplicationDependency.ApplicationDependency;
import * as ApplicationDependencyRecommendationCollection from "./application-dependency-recommendation-collection";
export import ApplicationDependencyRecommendationCollection = ApplicationDependencyRecommendationCollection.ApplicationDependencyRecommendationCollection;
import * as ApplicationDependencyRecommendationSummary from "./application-dependency-recommendation-summary";
export import ApplicationDependencyRecommendationSummary = ApplicationDependencyRecommendationSummary.ApplicationDependencyRecommendationSummary;
import * as ApplicationDependencyVulnerabilityCollection from "./application-dependency-vulnerability-collection";
export import ApplicationDependencyVulnerabilityCollection = ApplicationDependencyVulnerabilityCollection.ApplicationDependencyVulnerabilityCollection;
import * as ApplicationDependencyVulnerabilitySummary from "./application-dependency-vulnerability-summary";
export import ApplicationDependencyVulnerabilitySummary = ApplicationDependencyVulnerabilitySummary.ApplicationDependencyVulnerabilitySummary;
import * as ChangeKnowledgeBaseCompartmentDetails from "./change-knowledge-base-compartment-details";
export import ChangeKnowledgeBaseCompartmentDetails = ChangeKnowledgeBaseCompartmentDetails.ChangeKnowledgeBaseCompartmentDetails;
import * as ChangeRemediationRecipeCompartmentDetails from "./change-remediation-recipe-compartment-details";
export import ChangeRemediationRecipeCompartmentDetails = ChangeRemediationRecipeCompartmentDetails.ChangeRemediationRecipeCompartmentDetails;
import * as ChangeRemediationRunCompartmentDetails from "./change-remediation-run-compartment-details";
export import ChangeRemediationRunCompartmentDetails = ChangeRemediationRunCompartmentDetails.ChangeRemediationRunCompartmentDetails;
import * as ChangeVulnerabilityAuditCompartmentDetails from "./change-vulnerability-audit-compartment-details";
export import ChangeVulnerabilityAuditCompartmentDetails = ChangeVulnerabilityAuditCompartmentDetails.ChangeVulnerabilityAuditCompartmentDetails;
import * as ConfigSeverity from "./config-severity";
export import ConfigSeverity = ConfigSeverity.ConfigSeverity;
import * as CreateKnowledgeBaseDetails from "./create-knowledge-base-details";
export import CreateKnowledgeBaseDetails = CreateKnowledgeBaseDetails.CreateKnowledgeBaseDetails;
import * as CreateRemediationRecipeDetails from "./create-remediation-recipe-details";
export import CreateRemediationRecipeDetails = CreateRemediationRecipeDetails.CreateRemediationRecipeDetails;
import * as CreateRemediationRunDetails from "./create-remediation-run-details";
export import CreateRemediationRunDetails = CreateRemediationRunDetails.CreateRemediationRunDetails;
import * as CreateVulnerabilityAuditDetails from "./create-vulnerability-audit-details";
export import CreateVulnerabilityAuditDetails = CreateVulnerabilityAuditDetails.CreateVulnerabilityAuditDetails;
import * as DetectConfiguration from "./detect-configuration";
export import DetectConfiguration = DetectConfiguration.DetectConfiguration;
import * as KnowledgeBase from "./knowledge-base";
export import KnowledgeBase = KnowledgeBase.KnowledgeBase;
import * as KnowledgeBaseCollection from "./knowledge-base-collection";
export import KnowledgeBaseCollection = KnowledgeBaseCollection.KnowledgeBaseCollection;
import * as KnowledgeBaseSummary from "./knowledge-base-summary";
export import KnowledgeBaseSummary = KnowledgeBaseSummary.KnowledgeBaseSummary;
import * as NetworkConfiguration from "./network-configuration";
export import NetworkConfiguration = NetworkConfiguration.NetworkConfiguration;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as PipelineProperties from "./pipeline-properties";
export import PipelineProperties = PipelineProperties.PipelineProperties;
import * as PullRequestProperties from "./pull-request-properties";
export import PullRequestProperties = PullRequestProperties.PullRequestProperties;
import * as RemediationRecipe from "./remediation-recipe";
export import RemediationRecipe = RemediationRecipe.RemediationRecipe;
import * as RemediationRecipeCollection from "./remediation-recipe-collection";
export import RemediationRecipeCollection = RemediationRecipeCollection.RemediationRecipeCollection;
import * as RemediationRecipeSummary from "./remediation-recipe-summary";
export import RemediationRecipeSummary = RemediationRecipeSummary.RemediationRecipeSummary;
import * as RemediationRun from "./remediation-run";
export import RemediationRun = RemediationRun.RemediationRun;
import * as RemediationRunCollection from "./remediation-run-collection";
export import RemediationRunCollection = RemediationRunCollection.RemediationRunCollection;
import * as RemediationRunStage from "./remediation-run-stage";
export import RemediationRunStage = RemediationRunStage.RemediationRunStage;
import * as RemediationRunStageCollection from "./remediation-run-stage-collection";
export import RemediationRunStageCollection = RemediationRunStageCollection.RemediationRunStageCollection;
import * as RemediationRunStageSummary from "./remediation-run-stage-summary";
export import RemediationRunStageSummary = RemediationRunStageSummary.RemediationRunStageSummary;
import * as RemediationRunStageType from "./remediation-run-stage-type";
export import RemediationRunStageType = RemediationRunStageType.RemediationRunStageType;
import * as RemediationRunSummary from "./remediation-run-summary";
export import RemediationRunSummary = RemediationRunSummary.RemediationRunSummary;
import * as ScmConfiguration from "./scm-configuration";
export import ScmConfiguration = ScmConfiguration.ScmConfiguration;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as StageSummary from "./stage-summary";
export import StageSummary = StageSummary.StageSummary;
import * as UpdateKnowledgeBaseDetails from "./update-knowledge-base-details";
export import UpdateKnowledgeBaseDetails = UpdateKnowledgeBaseDetails.UpdateKnowledgeBaseDetails;
import * as UpdateRemediationRecipeDetails from "./update-remediation-recipe-details";
export import UpdateRemediationRecipeDetails = UpdateRemediationRecipeDetails.UpdateRemediationRecipeDetails;
import * as UpdateRemediationRunDetails from "./update-remediation-run-details";
export import UpdateRemediationRunDetails = UpdateRemediationRunDetails.UpdateRemediationRunDetails;
import * as UpdateVulnerabilityAuditDetails from "./update-vulnerability-audit-details";
export import UpdateVulnerabilityAuditDetails = UpdateVulnerabilityAuditDetails.UpdateVulnerabilityAuditDetails;
import * as UsageDataDetails from "./usage-data-details";
export import UsageDataDetails = UsageDataDetails.UsageDataDetails;
import * as VerifyConfiguration from "./verify-configuration";
export import VerifyConfiguration = VerifyConfiguration.VerifyConfiguration;
import * as Vulnerability from "./vulnerability";
export import Vulnerability = Vulnerability.Vulnerability;
import * as VulnerabilityAudit from "./vulnerability-audit";
export import VulnerabilityAudit = VulnerabilityAudit.VulnerabilityAudit;
import * as VulnerabilityAuditCollection from "./vulnerability-audit-collection";
export import VulnerabilityAuditCollection = VulnerabilityAuditCollection.VulnerabilityAuditCollection;
import * as VulnerabilityAuditConfiguration from "./vulnerability-audit-configuration";
export import VulnerabilityAuditConfiguration = VulnerabilityAuditConfiguration.VulnerabilityAuditConfiguration;
import * as VulnerabilityAuditSource from "./vulnerability-audit-source";
export import VulnerabilityAuditSource = VulnerabilityAuditSource.VulnerabilityAuditSource;
import * as VulnerabilityAuditSummary from "./vulnerability-audit-summary";
export import VulnerabilityAuditSummary = VulnerabilityAuditSummary.VulnerabilityAuditSummary;
import * as VulnerabilitySeverity from "./vulnerability-severity";
export import VulnerabilitySeverity = VulnerabilitySeverity.VulnerabilitySeverity;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestLogEntryCollection from "./work-request-log-entry-collection";
export import WorkRequestLogEntryCollection = WorkRequestLogEntryCollection.WorkRequestLogEntryCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestResourceMetadataKey from "./work-request-resource-metadata-key";
export import WorkRequestResourceMetadataKey = WorkRequestResourceMetadataKey.WorkRequestResourceMetadataKey;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;
import * as WorkRequestSummaryCollection from "./work-request-summary-collection";
export import WorkRequestSummaryCollection = WorkRequestSummaryCollection.WorkRequestSummaryCollection;

import * as ApplyStage from "./apply-stage";
export import ApplyStage = ApplyStage.ApplyStage;
import * as DetectStage from "./detect-stage";
export import DetectStage = DetectStage.DetectStage;
import * as ExternalResourceVulnerabilityAuditSource from "./external-resource-vulnerability-audit-source";
export import ExternalResourceVulnerabilityAuditSource = ExternalResourceVulnerabilityAuditSource.ExternalResourceVulnerabilityAuditSource;
import * as ExternalScmConfiguration from "./external-scm-configuration";
export import ExternalScmConfiguration = ExternalScmConfiguration.ExternalScmConfiguration;
import * as GitHubActionsConfiguration from "./git-hub-actions-configuration";
export import GitHubActionsConfiguration = GitHubActionsConfiguration.GitHubActionsConfiguration;
import * as GitLabPipelineConfiguration from "./git-lab-pipeline-configuration";
export import GitLabPipelineConfiguration = GitLabPipelineConfiguration.GitLabPipelineConfiguration;
import * as JenkinsPipelineConfiguration from "./jenkins-pipeline-configuration";
export import JenkinsPipelineConfiguration = JenkinsPipelineConfiguration.JenkinsPipelineConfiguration;
import * as NoneVerifyConfiguration from "./none-verify-configuration";
export import NoneVerifyConfiguration = NoneVerifyConfiguration.NoneVerifyConfiguration;
import * as OciCodeRepositoryConfiguration from "./oci-code-repository-configuration";
export import OciCodeRepositoryConfiguration = OciCodeRepositoryConfiguration.OciCodeRepositoryConfiguration;
import * as OciDevOpsBuildConfiguration from "./oci-dev-ops-build-configuration";
export import OciDevOpsBuildConfiguration = OciDevOpsBuildConfiguration.OciDevOpsBuildConfiguration;
import * as OciResourceVulnerabilityAuditSource from "./oci-resource-vulnerability-audit-source";
export import OciResourceVulnerabilityAuditSource = OciResourceVulnerabilityAuditSource.OciResourceVulnerabilityAuditSource;
import * as RecommendStage from "./recommend-stage";
export import RecommendStage = RecommendStage.RecommendStage;
import * as UnknownSourceVulnerabilityAuditSource from "./unknown-source-vulnerability-audit-source";
export import UnknownSourceVulnerabilityAuditSource = UnknownSourceVulnerabilityAuditSource.UnknownSourceVulnerabilityAuditSource;
import * as UsageDataViaObjectStorageTupleDetails from "./usage-data-via-object-storage-tuple-details";
export import UsageDataViaObjectStorageTupleDetails = UsageDataViaObjectStorageTupleDetails.UsageDataViaObjectStorageTupleDetails;
import * as VerifyStage from "./verify-stage";
export import VerifyStage = VerifyStage.VerifyStage;
