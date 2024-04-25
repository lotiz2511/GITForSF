@RestResource(urlMapping='/v1/WebServiceKnowledge/')
global class KnowledgeArticleManagement {
    @httpGet
    global static List<Knowledge__kav> doGetMethod(){
        List<Knowledge__kav> kav = New List<Knowledge__kav>();
        Map<String,String> paramsMap = RestContext.request.params;
        String kavStatus=paramsMap.get('status');
        String kavNombre=paramsMap.get('nombre');
        String KavCategoria = paramsMap.get('categoria');
        String KavCreatedDate = paramsMap.get('fecha');
        system.debug('kavstatus:'+kavstatus);
        system.debug('kavnombre:'+kavnombre);
        system.debug('KavCategoria:'+KavCategoria);
        system.debug('KavCreatedDate:'+KavCreatedDate);
        String QueryBase = 'SELECT Id, KnowledgeArticleId, OwnerId, IsDeleted, ValidationStatus, PublishStatus,VersionNumber, IsLatestVersion, IsVisibleInApp, IsVisibleInPkb, IsVisibleInCsp, IsVisibleInPrm,CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, SystemModstamp, Language, Title,UrlName, ArchivedDate, ArchivedById, Summary, ArticleNumber, FirstPublishedDate,LastPublishedDate, ArticleArchivedById, ArticleArchivedDate, ArticleCaseAttachCount, ArticleCreatedById, ArticleCreatedDate, ArticleMasterLanguage, ArticleTotalViewCount,SourceId, RecordTypeId, AssignedToId, AssignedById, AssignmentDate, AssignmentDueDate,AssignmentNote, MigratedToFromArticleVersion, Answer__c, Question__c, Body_Article__c FROM Knowledge__kav ';
        String WhereQuery;
        
        if(!String.isBlank(kavstatus) && String.isBlank(WhereQuery)){
            WhereQuery = 'Where PublishStatus=\''+kavstatus+'\'';
        } else if(!String.isBlank(kavstatus) && !String.isBlank(WhereQuery)){
            WhereQuery += ' and PublishStatus=\''+kavstatus+'\''; 
        }
        
        if(!String.isBlank(kavNombre) && String.isBlank(WhereQuery)){
            WhereQuery = 'Where Title=\''+kavNombre+'\'';
        } else if(!String.isBlank(kavNombre) && !String.isBlank(WhereQuery)){
            WhereQuery += ' and Title=\''+kavNombre+'\'';
        }
        //2021-06-15
        if(!String.isBlank(KavCreatedDate) && String.isBlank(WhereQuery)){
            WhereQuery = 'Where CreatedDate>='+KavCreatedDate+'T00:00:00Z and CreatedDate<='+KavCreatedDate+'T23:59:59Z';
        } else if(!String.isBlank(KavCreatedDate) && !String.isBlank(WhereQuery)){
            WhereQuery += ' and CreatedDate='+KavCreatedDate+'T00:00:00Z and CreatedDate<='+KavCreatedDate+'T23:59:59Z';
        }
        
        if(!String.isBlank(KavCategoria) && String.isBlank(WhereQuery)){
            WhereQuery = 'Where PublishStatus=\'online\' WITH DATA CATEGORY Leave_blank__c AT '+KavCategoria;
        } else if(!String.isBlank(KavCategoria) && !String.isBlank(WhereQuery)){
            WhereQuery += ' WITH DATA CATEGORY Leave_blank__c AT '+KavCategoria;
        }
        
        system.debug('WhereQuery:'+WhereQuery);
        String FullQuery;
        if(!String.isBlank(WhereQuery)){
            FullQuery = QueryBase + WhereQuery;
        }else{
            FullQuery = QueryBase;
        }
        kav = Database.query(FullQuery);
        return kav;
    }
}