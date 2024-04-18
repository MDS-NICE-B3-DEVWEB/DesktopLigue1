'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
function activate(context) {
    let version = vscode_1.workspace.getConfiguration("laravelDocs").version;
    let baseUrl = version ? `https://laravel.com/docs/${version}/` : 'https://laravel.com/docs/';
    let laravelDocsArtisan = vscode_1.commands.registerCommand('extension.laravelDocsArtisan', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'artisan'));
    });
    context.subscriptions.push(laravelDocsArtisan);
    let laravelDocsAuthentication = vscode_1.commands.registerCommand('extension.laravelDocsAuthentication', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'authentication'));
    });
    context.subscriptions.push(laravelDocsAuthentication);
    let laravelDocsAuthorization = vscode_1.commands.registerCommand('extension.laravelDocsAuthorization', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'authorization'));
    });
    context.subscriptions.push(laravelDocsAuthorization);
    let laravelDocsBilling = vscode_1.commands.registerCommand('extension.laravelDocsBilling', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'billing'));
    });
    context.subscriptions.push(laravelDocsBilling);
    let laravelDocsBlade = vscode_1.commands.registerCommand('extension.laravelDocsBlade', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'blade'));
    });
    context.subscriptions.push(laravelDocsBlade);
    let laravelDocsBroadcasting = vscode_1.commands.registerCommand('extension.laravelDocsBroadcasting', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'broadcasting'));
    });
    context.subscriptions.push(laravelDocsBroadcasting);
    let laravelDocsCache = vscode_1.commands.registerCommand('extension.laravelDocsCache', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'cache'));
    });
    context.subscriptions.push(laravelDocsCache);
    let laravelDocsCashierPaddle = vscode_1.commands.registerCommand('extension.laravelDocsCashierPaddle', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'cashier-paddle'));
    });
    context.subscriptions.push(laravelDocsCashierPaddle);
    let laravelDocsCollections = vscode_1.commands.registerCommand('extension.laravelDocsCollections', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'collections'));
    });
    context.subscriptions.push(laravelDocsCollections);
    let laravelDocsConfiguration = vscode_1.commands.registerCommand('extension.laravelDocsConfiguration', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'configuration'));
    });
    context.subscriptions.push(laravelDocsConfiguration);
    let laravelDocsConsoleTests = vscode_1.commands.registerCommand('extension.laravelDocsConsoleTests', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'console-tests'));
    });
    context.subscriptions.push(laravelDocsConsoleTests);
    let laravelDocsContainer = vscode_1.commands.registerCommand('extension.laravelDocsContainer', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'container'));
    });
    context.subscriptions.push(laravelDocsContainer);
    let laravelDocsContracts = vscode_1.commands.registerCommand('extension.laravelDocsContracts', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'contracts'));
    });
    context.subscriptions.push(laravelDocsContracts);
    let laravelDocsContributions = vscode_1.commands.registerCommand('extension.laravelDocsContributions', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'contributions'));
    });
    context.subscriptions.push(laravelDocsContributions);
    let laravelDocsControllers = vscode_1.commands.registerCommand('extension.laravelDocsControllers', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'controllers'));
    });
    context.subscriptions.push(laravelDocsControllers);
    let laravelDocsCsrf = vscode_1.commands.registerCommand('extension.laravelDocsCsrf', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'csrf'));
    });
    context.subscriptions.push(laravelDocsCsrf);
    let laravelDocsDatabase = vscode_1.commands.registerCommand('extension.laravelDocsDatabase', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'database'));
    });
    context.subscriptions.push(laravelDocsDatabase);
    let laravelDocsDatabaseTesting = vscode_1.commands.registerCommand('extension.laravelDocsDatabaseTesting', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'database-testing'));
    });
    context.subscriptions.push(laravelDocsDatabaseTesting);
    let laravelDocsDeployment = vscode_1.commands.registerCommand('extension.laravelDocsDeployment', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'deployment'));
    });
    context.subscriptions.push(laravelDocsDeployment);
    let laravelDocsDusk = vscode_1.commands.registerCommand('extension.laravelDocsDusk', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'dusk'));
    });
    context.subscriptions.push(laravelDocsDusk);
    let laravelDocsEloquent = vscode_1.commands.registerCommand('extension.laravelDocsEloquent', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'eloquent'));
    });
    context.subscriptions.push(laravelDocsEloquent);
    let laravelDocsEloquentCollections = vscode_1.commands.registerCommand('extension.laravelDocsEloquentCollections', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'eloquent-collections'));
    });
    context.subscriptions.push(laravelDocsEloquentCollections);
    let laravelDocsEloquentFactories = vscode_1.commands.registerCommand('extension.laravelDocsEloquentFactories', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'eloquent-factories'));
    });
    context.subscriptions.push(laravelDocsEloquentFactories);
    let laravelDocsEloquentMutators = vscode_1.commands.registerCommand('extension.laravelDocsEloquentMutators', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'eloquent-mutators'));
    });
    context.subscriptions.push(laravelDocsEloquentMutators);
    let laravelDocsEloquentRelationships = vscode_1.commands.registerCommand('extension.laravelDocsEloquentRelationships', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'eloquent-relationships'));
    });
    context.subscriptions.push(laravelDocsEloquentRelationships);
    let laravelDocsEloquentResources = vscode_1.commands.registerCommand('extension.laravelDocsEloquentResources', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'eloquent-resources'));
    });
    context.subscriptions.push(laravelDocsEloquentResources);
    let laravelDocsEloquentSerialization = vscode_1.commands.registerCommand('extension.laravelDocsEloquentSerialization', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'eloquent-serialization'));
    });
    context.subscriptions.push(laravelDocsEloquentSerialization);
    let laravelDocsEncryption = vscode_1.commands.registerCommand('extension.laravelDocsEncryption', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'encryption'));
    });
    context.subscriptions.push(laravelDocsEncryption);
    let laravelDocsEnvoy = vscode_1.commands.registerCommand('extension.laravelDocsEnvoy', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'envoy'));
    });
    context.subscriptions.push(laravelDocsEnvoy);
    let laravelDocsErrors = vscode_1.commands.registerCommand('extension.laravelDocsErrors', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'errors'));
    });
    context.subscriptions.push(laravelDocsErrors);
    let laravelDocsEvents = vscode_1.commands.registerCommand('extension.laravelDocsEvents', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'events'));
    });
    context.subscriptions.push(laravelDocsEvents);
    let laravelDocsFacades = vscode_1.commands.registerCommand('extension.laravelDocsFacades', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'facades'));
    });
    context.subscriptions.push(laravelDocsFacades);
    let laravelDocsFilesystem = vscode_1.commands.registerCommand('extension.laravelDocsFilesystem', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'filesystem'));
    });
    context.subscriptions.push(laravelDocsFilesystem);
    let laravelDocsFolio = vscode_1.commands.registerCommand('extension.laravelDocsFolio', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'folio'));
    });
    context.subscriptions.push(laravelDocsFolio);
    let laravelDocsFortify = vscode_1.commands.registerCommand('extension.laravelDocsFortify', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'fortify'));
    });
    context.subscriptions.push(laravelDocsFortify);
    let laravelDocsFrontend = vscode_1.commands.registerCommand('extension.laravelDocsFrontend', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'frontend'));
    });
    context.subscriptions.push(laravelDocsFrontend);
    let laravelDocsHashing = vscode_1.commands.registerCommand('extension.laravelDocsHashing', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'hashing'));
    });
    context.subscriptions.push(laravelDocsHashing);
    let laravelDocsHelpers = vscode_1.commands.registerCommand('extension.laravelDocsHelpers', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'helpers'));
    });
    context.subscriptions.push(laravelDocsHelpers);
    let laravelDocsHomestead = vscode_1.commands.registerCommand('extension.laravelDocsHomestead', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'homestead'));
    });
    context.subscriptions.push(laravelDocsHomestead);
    let laravelDocsHorizon = vscode_1.commands.registerCommand('extension.laravelDocsHorizon', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'horizon'));
    });
    context.subscriptions.push(laravelDocsHorizon);
    let laravelDocsHttpClient = vscode_1.commands.registerCommand('extension.laravelDocsHttpClient', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'http-client'));
    });
    context.subscriptions.push(laravelDocsHttpClient);
    let laravelDocsHttpTests = vscode_1.commands.registerCommand('extension.laravelDocsHttpTests', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'http-tests'));
    });
    context.subscriptions.push(laravelDocsHttpTests);
    let laravelDocsInstallation = vscode_1.commands.registerCommand('extension.laravelDocsInstallation', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'installation'));
    });
    context.subscriptions.push(laravelDocsInstallation);
    let laravelDocsLifecycle = vscode_1.commands.registerCommand('extension.laravelDocsLifecycle', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'lifecycle'));
    });
    context.subscriptions.push(laravelDocsLifecycle);
    let laravelDocsLocalization = vscode_1.commands.registerCommand('extension.laravelDocsLocalization', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'localization'));
    });
    context.subscriptions.push(laravelDocsLocalization);
    let laravelDocsLogging = vscode_1.commands.registerCommand('extension.laravelDocsLogging', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'logging'));
    });
    context.subscriptions.push(laravelDocsLogging);
    let laravelDocsMail = vscode_1.commands.registerCommand('extension.laravelDocsMail', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'mail'));
    });
    context.subscriptions.push(laravelDocsMail);
    let laravelDocsMiddleware = vscode_1.commands.registerCommand('extension.laravelDocsMiddleware', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'middleware'));
    });
    context.subscriptions.push(laravelDocsMiddleware);
    let laravelDocsMigrations = vscode_1.commands.registerCommand('extension.laravelDocsMigrations', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'migrations'));
    });
    context.subscriptions.push(laravelDocsMigrations);
    let laravelDocsMix = vscode_1.commands.registerCommand('extension.laravelDocsMix', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'mix'));
    });
    context.subscriptions.push(laravelDocsMix);
    let laravelDocsMocking = vscode_1.commands.registerCommand('extension.laravelDocsMocking', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'mocking'));
    });
    context.subscriptions.push(laravelDocsMocking);
    let laravelDocsNotifications = vscode_1.commands.registerCommand('extension.laravelDocsNotifications', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'notifications'));
    });
    context.subscriptions.push(laravelDocsNotifications);
    let laravelDocsOctane = vscode_1.commands.registerCommand('extension.laravelDocsOctane', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'octane'));
    });
    context.subscriptions.push(laravelDocsOctane);
    let laravelDocsPackages = vscode_1.commands.registerCommand('extension.laravelDocsPackages', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'packages'));
    });
    context.subscriptions.push(laravelDocsPackages);
    let laravelDocsPagination = vscode_1.commands.registerCommand('extension.laravelDocsPagination', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'pagination'));
    });
    context.subscriptions.push(laravelDocsPagination);
    let laravelDocsPassport = vscode_1.commands.registerCommand('extension.laravelDocsPassport', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'passport'));
    });
    context.subscriptions.push(laravelDocsPassport);
    let laravelDocsPasswords = vscode_1.commands.registerCommand('extension.laravelDocsPasswords', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'passwords'));
    });
    context.subscriptions.push(laravelDocsPasswords);
    let laravelDocsPennant = vscode_1.commands.registerCommand('extension.laravelDocsPennant', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'pennant'));
    });
    context.subscriptions.push(laravelDocsPennant);
    let laravelDocsPint = vscode_1.commands.registerCommand('extension.laravelDocsPint', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'pint'));
    });
    context.subscriptions.push(laravelDocsPint);
    let laravelDocsPrecognition = vscode_1.commands.registerCommand('extension.laravelDocsPrecognition', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'precognition'));
    });
    context.subscriptions.push(laravelDocsPrecognition);
    let laravelDocsProcesses = vscode_1.commands.registerCommand('extension.laravelDocsProcesses', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'processes'));
    });
    context.subscriptions.push(laravelDocsProcesses);
    let laravelDocsPrompts = vscode_1.commands.registerCommand('extension.laravelDocsPrompts', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'prompts'));
    });
    context.subscriptions.push(laravelDocsPrompts);
    let laravelDocsProviders = vscode_1.commands.registerCommand('extension.laravelDocsProviders', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'providers'));
    });
    context.subscriptions.push(laravelDocsProviders);
    let laravelDocsPulse = vscode_1.commands.registerCommand('extension.laravelDocsPulse', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'pulse'));
    });
    context.subscriptions.push(laravelDocsPulse);
    let laravelDocsQueries = vscode_1.commands.registerCommand('extension.laravelDocsQueries', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'queries'));
    });
    context.subscriptions.push(laravelDocsQueries);
    let laravelDocsQueues = vscode_1.commands.registerCommand('extension.laravelDocsQueues', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'queues'));
    });
    context.subscriptions.push(laravelDocsQueues);
    let laravelDocsRateLimiting = vscode_1.commands.registerCommand('extension.laravelDocsRateLimiting', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'rate-limiting'));
    });
    context.subscriptions.push(laravelDocsRateLimiting);
    let laravelDocsRedis = vscode_1.commands.registerCommand('extension.laravelDocsRedis', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'redis'));
    });
    context.subscriptions.push(laravelDocsRedis);
    let laravelDocsReleases = vscode_1.commands.registerCommand('extension.laravelDocsReleases', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'releases'));
    });
    context.subscriptions.push(laravelDocsReleases);
    let laravelDocsRequests = vscode_1.commands.registerCommand('extension.laravelDocsRequests', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'requests'));
    });
    context.subscriptions.push(laravelDocsRequests);
    let laravelDocsResponses = vscode_1.commands.registerCommand('extension.laravelDocsResponses', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'responses'));
    });
    context.subscriptions.push(laravelDocsResponses);
    let laravelDocsRouting = vscode_1.commands.registerCommand('extension.laravelDocsRouting', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'routing'));
    });
    context.subscriptions.push(laravelDocsRouting);
    let laravelDocsSail = vscode_1.commands.registerCommand('extension.laravelDocsSail', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'sail'));
    });
    context.subscriptions.push(laravelDocsSail);
    let laravelDocsSanctum = vscode_1.commands.registerCommand('extension.laravelDocsSanctum', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'sanctum'));
    });
    context.subscriptions.push(laravelDocsSanctum);
    let laravelDocsScheduling = vscode_1.commands.registerCommand('extension.laravelDocsScheduling', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'scheduling'));
    });
    context.subscriptions.push(laravelDocsScheduling);
    let laravelDocsScout = vscode_1.commands.registerCommand('extension.laravelDocsScout', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'scout'));
    });
    context.subscriptions.push(laravelDocsScout);
    let laravelDocsSeeding = vscode_1.commands.registerCommand('extension.laravelDocsSeeding', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'seeding'));
    });
    context.subscriptions.push(laravelDocsSeeding);
    let laravelDocsSession = vscode_1.commands.registerCommand('extension.laravelDocsSession', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'session'));
    });
    context.subscriptions.push(laravelDocsSession);
    let laravelDocsSocialite = vscode_1.commands.registerCommand('extension.laravelDocsSocialite', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'socialite'));
    });
    context.subscriptions.push(laravelDocsSocialite);
    let laravelDocsStarterKits = vscode_1.commands.registerCommand('extension.laravelDocsStarterKits', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'starter-kits'));
    });
    context.subscriptions.push(laravelDocsStarterKits);
    let laravelDocsStrings = vscode_1.commands.registerCommand('extension.laravelDocsStrings', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'strings'));
    });
    context.subscriptions.push(laravelDocsStrings);
    let laravelDocsStructure = vscode_1.commands.registerCommand('extension.laravelDocsStructure', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'structure'));
    });
    context.subscriptions.push(laravelDocsStructure);
    let laravelDocsTelescope = vscode_1.commands.registerCommand('extension.laravelDocsTelescope', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'telescope'));
    });
    context.subscriptions.push(laravelDocsTelescope);
    let laravelDocsTesting = vscode_1.commands.registerCommand('extension.laravelDocsTesting', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'testing'));
    });
    context.subscriptions.push(laravelDocsTesting);
    let laravelDocsUpgrade = vscode_1.commands.registerCommand('extension.laravelDocsUpgrade', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'upgrade'));
    });
    context.subscriptions.push(laravelDocsUpgrade);
    let laravelDocsUrls = vscode_1.commands.registerCommand('extension.laravelDocsUrls', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'urls'));
    });
    context.subscriptions.push(laravelDocsUrls);
    let laravelDocsValet = vscode_1.commands.registerCommand('extension.laravelDocsValet', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'valet'));
    });
    context.subscriptions.push(laravelDocsValet);
    let laravelDocsValidation = vscode_1.commands.registerCommand('extension.laravelDocsValidation', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'validation'));
    });
    context.subscriptions.push(laravelDocsValidation);
    let laravelDocsVerification = vscode_1.commands.registerCommand('extension.laravelDocsVerification', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'verification'));
    });
    context.subscriptions.push(laravelDocsVerification);
    let laravelDocsViews = vscode_1.commands.registerCommand('extension.laravelDocsViews', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'views'));
    });
    context.subscriptions.push(laravelDocsViews);
    let laravelDocsVite = vscode_1.commands.registerCommand('extension.laravelDocsVite', () => {
        vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(baseUrl + 'vite'));
    });
    context.subscriptions.push(laravelDocsVite);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map