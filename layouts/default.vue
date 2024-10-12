<script lang="ts" setup>
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button';
import { useToast } from '~/components/ui/toast';

const email = "ramapradana.kerjaan@gmail.com";
const { toast } = useToast();

const copyToClipboard = () => {
  navigator.clipboard.writeText(email).then(function() {
    toast({description: "Email copied to clipboard"})
  }).catch(function(err) {
    console.error('Error in copying text: ', err);
  });
};
</script>

<template>
  <div class="antialiased min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
    <div class="max-w-[60ch] mx-auto w-full space-y-6">
      <nav class="flex justify-center mb-[64px]">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
                About Me
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/career" :class="navigationMenuTriggerStyle()">
                Career
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/blogs" :class="navigationMenuTriggerStyle()">
                Blogs
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <slot />
    </div>
    <footer>
        <div class="flex gap-3 justify-center mt-[64px] text-muted-foreground">
          <div><Button variant="link" @click="copyToClipboard">email</Button></div>
          <div><Button as-child variant="link"><a href="https://www.linkedin.com/in/rama-pradana" target="_blank"">linkedin</a></Button></div>
          <div><Button as-child variant="link"><a href="https://github.com/ramaprdn" target="_blank"">github</a></Button></div>
        </div>
      </footer>
  </div>
</template>
