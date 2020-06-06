<footer class="footer" role="contentinfo">
	<div class="content">

		<div class="footer-tile logo-tile c-width-25">
			<ul>
				<li class="logo-li">
					<a href="/"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" ></a>
				</li>
			</ul>
		</div>

		<div class="footer-tile footer-nav-tile c-width-25">
			<ul>
				<li class="footer-tile-header">
					NAV
				</li>
				<?php $mainFootMenu = wp_nav_menu( array('theme_location' => 'footer-menu'));?>
			</ul>
		</div>

		<div class="footer-tile social-tile c-width-25">
			<ul>
				<li class="footer-tile-header">
					Social
				</li>
				<li class="social-li">
					<a class="" href="<?php the_field('facebook', 'options');?>" target="_blank">
						<i class="fab fa-facebook"></i>
					</a>
					<a class="" href="<?php the_field('twitter', 'options');?>" target="_blank">
						<i class="fab fa-twitter"></i>
					</a>
					<a class="" href="<?php the_field('instagram', 'options');?>" target="_blank">
						<i class="fab fa-instagram"></i>
					</a>
				</li>
			</ul>
		</div>

		<div class="footer-tile subscribe-tile c-width-25">
			<ul>
				<li class="footer-tile-header">
					Subscribe
				</li>
				<li>
					News Letter
					<!-- Begin Mailchimp Signup Form -->
					<form action="URL FROM MAILCHIMP" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="mailchimp-signup-form validate" target="_blank" novalidate>
						<div class="mc-field-group">
							<input type="email" placeholder="Email Address" name="EMAIL" class="required email" id="mce-EMAIL">
						</div>
						<div id="mce-responses" class="clear">
							<div class="response" id="mce-error-response" style="display:none"></div>
							<div class="response" id="mce-success-response" style="display:none"></div>
						</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
				    <div style="position: absolute; left: -5000px;" aria-hidden="true">
							<input type="text" name="ID FROM MAILCHIMP" tabindex="-1" value="">
						</div>
						<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="seemax-button">
					</form>
				</li>
				<!--End mc_embed_signup-->
			</ul>
		</div>
	</div>
	<div class="copyright">
		&copy; Copyright <?php echo date("Y"); ?> <?php echo get_bloginfo();?>
	</div>
</footer>
<?php wp_footer(); ?>
</div><!-- WRAPPER -->
</body>
</html>
