<footer class="footer" role="contentinfo">
	<div class="content">

		<ul class="footer-tile logo-tile c-width-16">
			<li class="logo-li">
				<a href="/"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/logo-white.svg" alt="<?php echo esc_attr( $image['alt'] ); ?>"></a>
			</li>
		</ul>

		<ul class="footer-tile address-tile c-width-25">
			<li class="footer-tile-header">
				Address
			</li>
			<?php if(get_field('contact_address', 'option')):?>
				<li>
					<?php the_field('contact_address', 'option');?>
				</li>
			<?php endif;?>
		</ul>

		<ul class="footer-tile contact-tile c-width-27">
			<li class="footer-tile-header">
				Contact
			</li>
			<?php if(get_field('phone_number', 'option')):?>
				<li>
					<a href="tel:<?php the_field('phone_number', 'option');?>">
						P: <?php the_field('phone_number', 'option');?>
					</a>
				</li>
			<?php endif;?>
			<?php if(get_field('fax_number', 'option')):?>
				<li>
					<a href="tel:<?php the_field('fax_number', 'option');?>">
						F: <?php the_field('fax_number', 'option');?>
					</a>
				</li>
			<?php endif;?>
			<?php if(get_field('email_address', 'option')):?>
				<li>
					<a href="mailto:<?php the_field('contact_email', 'option');?>">
						E: <?php the_field('email_address', 'option');?>
					</a>
				</li>
			<?php endif;?>
		</ul>
		
		<ul class="footer-tile footer-nav-tile c-width-16">
			<li class="footer-tile-header">
				Pages
			</li>
			<?php $mainFootMenu = wp_nav_menu( array('theme_location' => 'footer-menu'));?>
		</ul>
		
		<ul class="footer-tile help-tile c-width-16">
			<li class="footer-tile-header">
				Help
			</li>
			<li class="help-li">
				<a href="#estimate">
					Get Estimate
				</a>	
			</li>
			<li class="help-li">
				<a href="tel:<?php the_field('phone_number', 'option');?>">
					Emergency Service
				</a>
			</li>
		</ul>
	</div>
	<div class="copyright">
		&copy; Copyright <?php echo date("Y"); ?> <?php echo get_bloginfo();?> All Rights Reserved
	</div>
</footer>
<?php wp_footer(); ?>
</div><!-- WRAPPER -->
</body>
</html>
