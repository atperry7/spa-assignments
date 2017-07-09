export const run =
  ($transitions, loginService) => {
    'ngInject'

    let requiresAuthCriteria = {
      to: (state) => state.data && state.data.requiresAuth
    }

    let redirectToLogin = (transition) => {
      let loginService = transition.injector().get('loginService')
      let $state = transition.router.stateService
      if (!loginService.isAuthenticated()) {
        return $state.target('login', undefined, { location: false })
      }
    }

    $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {priority: 10})
  }
